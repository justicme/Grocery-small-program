// pages/mainhome/mainhom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[{
      mode:'scaleToFill',
      text : 'scaleToFill: 不保持纵横比缩放图片 ， 使图片完全适应'
    }], 
    list: [{
      id: 1,
      name: '贤姨日杂店',
      content: "欢迎大家来到贤姨日杂店"
    }, {
      id: 2,
      name: '香蕉',
      content: "我是李四，可以带大将去玩。。。。"

    },{
        id: 3,
        name: '苹果',
        content: "我是王五，我编码贼好。。。。"

      }],
    src: '../../image/rc.jpg' , 
    list1: [{
      "text": "对话",
      "iconPath": "../../images/tabbar_icon_chat_default.png",
    "selectedIconPath": "../../images/tabbar_icon_chat_active.png",
      dot: true
  },
  {
      "text": "设置",
    "iconPath": "../../images/tabbar_icon_setting_default.png",
    "selectedIconPath": "../../images/tabbar_icon_setting_active.png",
      badge: 'New'
  }]

  }, 

  click: function (e) { 
    console.log("按了：", e.currentTarget.id)
  }, 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  } , 
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  }
})