// pages/user/index.js
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
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const userInfo = wx.getStorageSync('userInfo');
    if (!userInfo.nickName) {
    } else {
      this.setData({
        userInfo,
      });
    }
  },
  handleUserIconTap: function (e) {
    console.log(e);
    const userInfo = wx.getStorageSync('userInfo');
    if (!userInfo.nickName) {
      wx.navigateTo({
        url: '/pages/login/index',
      });
    }
  },
});
