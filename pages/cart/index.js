// pages/cart/index.js
import { getSetting, chooseAddress, openSetting } from '../../utils/asyncWx.js';
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({
  /**
   * 1.获取用户收货地址wx.chooseAddress内置api
   * 2.获取用户收货地址的授权状态
   */
  /**
   * 页面的初始数据
   */
  data: {
    address: {},
    cart: [],
    allChecked: false,
    totalPrice: 0,
    totalNum: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  onShow: function () {
    const address = wx.getStorageSync('address');
    const cart = wx.getStorageSync('cart') || [];
    /*计算全选:every数组方法:会遍历会接受一个回调函数,每一个回调函数都返回是true那么every方法的返回值为true
    只要有一个回调函数返回了false那么不在执行循环,直接返回false
    */
    this.setData({ address });
    this.setCart(cart);
  },
  /*点击收货地址按钮,获取地址
   */
  handleChooseAddress: function () {
    // const res1 = await getSetting();
    // const scopeAddress = res1.authSetting['scope.address'];
    // if (scopeAddress === true || scopeAddress === undefined) {
    //   const res2 = chooseAddress()
    //   console.log(res2);
    // }else{
    //   await openSetting();
    //   const res2 = chooseAddress()
    //   console.log(res2);
    // }
    // 1获取权限状态
    wx.getSetting({
      success: (result) => {
        // 注意取值使用中括号
        const scopeAddress = result.authSetting['scope.address'];
        if (scopeAddress === true || scopeAddress === undefined) {
          //获取地址
          wx.chooseAddress({
            success: (result1) => {
              wx.setStorageSync('address', result1);
              this.setData({
                address: result1,
              });
            },
          });
        } else {
          //诱导用户授权
          wx.openSetting({
            success: (result) => {
              //获取地址
              wx.chooseAddress({
                success: (result3) => {
                  wx.setStorageSync('address', result3);
                  this.setData({
                    address: result3,
                  });
                },
              });
            },
          });
        }
      },
    });
  },
  // 购物车项选中
  checkboxChange: function (e) {
    // 单选
    const goods_id = e.currentTarget.dataset.id;
    let { cart } = this.data;
    let index = cart.findIndex((v) => v.goods_id === goods_id);
    cart[index].checked = !cart[index].checked;
    this.setCart(cart);
  },
  // 全选
  handleItemAllCheck: function () {
    let { cart, allChecked } = this.data;
    allChecked = !allChecked;
    cart.forEach((v) => (v.checked = allChecked));
    this.setCart(cart);
  },
  // 商品数量编辑
  handleItemNumEdit: function (e) {
    const { operation, id } = e.currentTarget.dataset;
    let { cart } = this.data;
    const index = cart.findIndex((v) => v.goods_id === id);
    if (cart[index].goods_cart_number === 1 && operation === -1) {
      wx.showModal({
        title: '提示',
        content: '您是否要删除?',
        showCancel: true,
        cancelText: '取消',
        cancelColor: '#000000',
        confirmText: '确定',
        confirmColor: '#eb4450',
        success: (result) => {
          if (result.confirm) {
            cart.splice(index, 1);
            this.setCart(cart);
          }
        },
        fail: () => {},
        complete: () => {},
      });
    } else {
      cart[index].goods_cart_number += operation;
      this.setCart(cart);
    }
  },
  // 重置计算购物项
  setCart(cart) {
    let allChecked = true;
    let totalPrice = 0;
    let totalNum = 0;
    cart.forEach((v) => {
      if (v.checked) {
        totalPrice = totalPrice + v.goods_cart_number * v.goods_price;
        totalNum = totalNum + v.goods_cart_number;
      } else {
        allChecked = false;
      }
    });
    allChecked = cart.length != 0 ? allChecked : false;
    console.log(allChecked);
    this.setData({
      cart,
      totalPrice,
      totalNum,
      allChecked,
    });
    wx.setStorageSync('cart', cart);
  },
  // 结算
  handlePay: function () {
    // 1.校验
    const { address, totalNum } = this.data;
    if (!address.userName) {
      wx.showToast({
        title: '请添加收货地址',
        duration: 1500,
        mask: true,
        success: (result) => {},
      });
      return;
    }
    if (totalNum === 0) {
      wx.showToast({
        title: '请选购商品',
        duration: 1500,
        mask: true,
        success: (result) => {},
      });
      return;
    }
    // 跳转支付
    wx.navigateTo({
      url: '/pages/pay/index',
    });
  },
});
