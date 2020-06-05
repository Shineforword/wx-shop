// pages/goods_detail/index.js
/***
 * 1.图文详情
 * 2.底部工具栏
 * 3.加入购物车
 */

Page({
  /**
   * 页面的初始数据
   */
  data: {
    goods_swiperList: [
      {
        img_src:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d76f5cc97f6446f72dcffc28fac3a472.jpg',
      },
      {
        img_src:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/759ade8991284b9fad5eda125cd7a53e.jpg',
      },
      {
        img_src:
          'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7f187ce9cb1ab5bd65fd81489a4e349a.jpg',
      },
    ],
    goods_price: '3000',
    goods_name:
      '「“618开门红狂欢”最后1天，6月4日恢复1599元！买电视抽小米手表/电视音箱/小爱Play等好礼！」「价保30天，买贵补差」',
    goods_introduce: `<div style="color:red;padding-top:2vh;font-size:2em";">图文详情</div>`,
    goods_id: 1,
    goods_cart_number: 1,
    checked: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取传递的参数
    wx.setNavigationBarTitle({
      title: options.title,
    });
  },
  /*
   * 预览图片
   */
  handlePreviewImage: function (e) {
    var that = this;
    const urls = that.data.goods_swiperList.map((v) => v.img_src);
    console.log(urls);
    wx.previewImage({
      current: urls[e.currentTarget.dataset.index],
      urls: urls,
    });
  },
  /*
   * 加入购物车
   */

  handleCartAdd: function (e) {
    console.log(e);
    // 1.获取缓存
    let cart = wx.getStorageSync('cart') || [];
    // 2.判断是否存在
    let index = cart.findIndex((v) => v.goods_id === this.data.goods_id);
    if (index === -1) {
      // 不存在添加
      console.log('添加商品');
      this.data.checked = true;
      cart.push(this.data);
    } else {
      // number++
      console.log('商品数量增加');
      cart[index].goods_cart_number++;
    }
    // 放回缓存
    console.log(cart);
    wx.setStorageSync('cart', cart);
    // 加入成功
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      duration: 1500,
      // 防止多次点击
      mask: true,
    });
  },
});

/**
 * 优化动态渲染
 * 1.数据优化,大量使用不到的数据在data中会造成一定程度的卡顿,可在解析是剔除不必要的数据
 * 2.iphone部分机型不识别.webp格式的图片 xxx.replace(/\.webp/g,'.jpg')可替换,后台需提供支持才可
 * 3.
 */
