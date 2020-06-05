//引入请求方法 一定要把路径补全
import {request} from "../../requests/index.js"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图数组
    swiperList:[
      {
        url:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3643eeb6c07ca646f2184895bbd6bf0d.jpg?thumb=1&w=2452&h=920&f=webp&q=90"
      },
      {
        url:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88b981160a382e0f4ece710bc8be6533.jpg?thumb=1&w=2452&h=920&f=webp&q=90"
      },
      {
        url:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3643eeb6c07ca646f2184895bbd6bf0d.jpg?thumb=1&w=2452&h=920&f=webp&q=90"
      }
    ],
    // 分类导航数据
    catesList:[
      {
        url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152'
      },
      {
        url:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d436f30612651fffe1d6c5aaa3fdb816.png?thumb=1&w=144&h=152"
      },
      {
        url:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/64f3988b6216e4c1ab62a7f50df3e816.png?thumb=1&w=144&h=152"
      },
      {
        url:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?thumb=1&w=144&h=152"
      },
      {
        url:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?thumb=1&w=144&h=152"
      },
      {
        url:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?thumb=1&w=144&h=152"
      },
      {
        url:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?thumb=1&w=144&h=152"
      },
      {
        url:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?thumb=1&w=144&h=152"
      },
      {
        url:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?thumb=1&w=144&h=152"
      },
      {
        url:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?thumb=1&w=144&h=152"
      }
    ],
    // 楼层数据
    floorList:[
      {
        floor_title:{
          name:"限时优惠",
          img_src:""
        },
        product_list:[
          {
            name : "物美",
            img_src:"https://res.vmallres.com/pimages//pages/picImages/T5mywF4fApzg9QRcapNS.png"
          },
          {
            name : "价廉",
            img_src:"https://res.vmallres.com/pimages//pages/picImages/OYCMZSiNYNiUaTlBD2w9.jpg"
          },
          {
            name :"童叟",
            img_src:"https://res.vmallres.com/pimages//pages/picImages/LWhMHpXLGJ70QjExJEMj.jpg"
          },
          {
            name :"无欺",
            img_src:"https://res.vmallres.com/pimages//pages/picImages/Cm40ssgVOP5gwWSBzlBq.jpg"
          },
          {
            name : "守信",
            img_src:"https://res.vmallres.com/pimages//pages/picImages/EYateifKV9AmcFVk9egd.jpg"
          },
        ]
      },
      {
        floor_title:{
          name:"免费大奖",
          img_src:""
        },
        product_list:[
          {
            name : "物美",
            img_src:"https://res.vmallres.com/pimages//pages/picImages/T5mywF4fApzg9QRcapNS.png"
          },
          {
            name : "价廉",
            img_src:"https://res.vmallres.com/pimages//pages/picImages/OYCMZSiNYNiUaTlBD2w9.jpg"
          },
          {
            name :"童叟",
            img_src:"https://res.vmallres.com/pimages//pages/picImages/LWhMHpXLGJ70QjExJEMj.jpg"
          },
          {
            name :"无欺",
            img_src:"https://res.vmallres.com/pimages//pages/picImages/Cm40ssgVOP5gwWSBzlBq.jpg"
          },
          {
            name : "守信",
            img_src:"https://res.vmallres.com/pimages//pages/picImages/EYateifKV9AmcFVk9egd.jpg"
          },
        ]
      }

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
    // 异步请求
    // wx.request({
    //   url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
    //   // 发送数据
    //   data: {},
    //   // 数据类型(默认)
    //   dataType: 'json',
    //   // 请求头(默认)
    //   header: {'content-type':'application/json'},
    //   // 请求方式(默认)
    //   method: 'GET',
    //   responseType: 'text',
    //   // 成功
    //   success: (result) => {
    //     console.log(result);
    //   },
    //   // 失败
    //   fail: (res) => {
    //     console.log(res);
    //   },
    //   complete: (res) => {
    //     console.log(res);
    //   },
    // })

    // 使用
    // request({url:'https://api.zbztb.cn/api/public/v1/home/swiperdata'})
    // .then(result=>{

    // })


  },















  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})