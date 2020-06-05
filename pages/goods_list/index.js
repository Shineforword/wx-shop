// pages/goods_list/index.js
Page({
    /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        value:"综合",
        isActive:true
      },
      {
        id:0,
        value:"销量",
        isActive:false

      },
      {
        id:0,
        value:"价格",
        isActive:false
      },
    ],
    goods_list:[
      {},{},{},{},{},{},{},
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    })
    setTimeout(() => {
      wx.hideLoading()
    }, 2000);
    console.log(options)
    wx.setNavigationBarTitle({
      title:options.title
    })
  },
  // 示例:子组件数据传递->父组件
  handleTabsItemChange:function(e){
    console.log(e)
    const {index} = e.detail;
    let {tabs} = this.data
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
    })
  }
})