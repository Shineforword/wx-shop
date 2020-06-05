// pages/login/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  // 获取用户信息
  handleGetUserInfo: function (e) {
    console.log(e);
    const { userInfo } = e.detail;
    wx.setStorageSync('userInfo', userInfo);
    wx.navigateBack({
      delta: 1,
    });
  },
});
