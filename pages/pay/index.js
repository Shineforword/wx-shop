// pages/cart/index.js
import { getSetting, chooseAddress, openSetting } from '../../utils/asyncWx.js';
import regeneratorRuntime from '../../lib/runtime/runtime';
/**
 * 1.页面数据处理
 * 2.微信支付权限:
 * 企业账号
 * 企业账号中后台添加开发者白名单(1个appid可以同时绑定多个开发者)
 * */

Page({
  /**
   * 页面的初始数据
   */
  data: {
    address: {},
    cart: [],
    totalPrice: 0,
    totalNum: 0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  onShow: function () {
    const address = wx.getStorageSync('address');
    let cart = wx.getStorageSync('cart') || [];
    cart = cart.filter((v) => v.checked);
    let totalPrice = 0;
    let totalNum = 0;
    cart.forEach((v) => {
      totalPrice = totalPrice + v.goods_cart_number * v.goods_price;
      totalNum = totalNum + v.goods_cart_number;
    });
    this.setData({
      cart,
      totalPrice,
      totalNum,
      address,
    });
  },
});
