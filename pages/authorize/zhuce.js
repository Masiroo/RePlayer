var app = getApp();
let Domain = app.globalData.domain;
var opid = '';
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },
  bindstart: function (e) {
    // 获得最新的用户信息
    console.log('click');   
    this.loginAndGetOpenid();
  },
  // 执行登录操作并获取用户openId
  loginAndGetOpenid: function () {
    console.log('do login');
    let that = this;

    let cmp = wx.getStorageSync('complete');
    if(cmp != 1)
    {
      console.log('首次登陆');
      wx.showModal({
        title: '确认用此ID登陆',
        content: '干巴爹',
        success: function (yes) {
          console.log(yes);
          that.sendUserInfoToServer();
        }
      })
    }else if(cmp == 1){
      console.log('非首次');
      let score = wx.getStorageSync('score');
      let my_xz = wx.getStorageSync('mydata');
      wx.showModal({
        title: 'Warning',
        content: '你已经答过题了,可再次参加但不计分数\n分数为：' + score,
        success: function (yes) {
          console.log(yes);
          that.sendUserInfoToServer();
        }
      })
    }
  },
  sendUserInfoToServer: function () {
    //wx.setStorageSync('complete', 0)
    console.log('now send user info to server');
    app.globalData.sum = 0;
    wx.navigateTo({
      url: '/pages/index/index',
    })   
  }
})