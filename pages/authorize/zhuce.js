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
  bindGetUserInfo: function (e) {
    // 获得最新的用户信息
    if (!e.detail.userInfo) {
      return;
    }
    wx.setStorageSync('userInfo', e.detail.userInfo)
    this.checkSessionAndLogin();
  },
  /* 
    这里使用openid 作为与后端session 连接的标志
    检查是否存在openid，即之前是否登录过
      如果登录过，检查session_key 是否过期
        如果过期了，remove openid 重新执行login 并将用户信息发送到服务器端更新
        如果没过期则返回
      如果没登录过则执行login 并将用户信息发送到服务器更新
  */
  checkSessionAndLogin: function () {
    let that = this;
    let thisOpenId = wx.getStorageSync('openid');

    // 已经进行了登录，检查登录是否过期
    if (thisOpenId) {
      console.log('have openid')
      wx.checkSession({
        success: function () {
          //session_key 未过期，并且在本生命周期一直有效
          wx.navigateBack({});
        },
        fail: function () {
          console.log('but session_key expired');
          // session_key 已经失效，需要重新执行登录流程
          wx.removeStorageSync('openid');
          that.checkSessionAndLogin();
        }
      })
    } else {
      // 没有进行登录则先进行登录操作
      console.log('do not have openid');
      that.loginAndGetOpenid();
    }
  },
  // 执行登录操作并获取用户openId
  loginAndGetOpenid: function () {
    console.log('do login and get openid');
    let that = this;
    wx.login({
      success: function (res) {
        if (res.code) {
          console.log(res.code);
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wxc482ee878a4bc8c1&secret=0d196c62749e87d1458d96954f0003ab&js_code='+ res.code +'&grant_type=authorization_code',
            data: {
              
            },
            success: function (res) {
              res = res.data;
              console.log(res)
              // 保存openId，并将用户信息发送给后端
                opid = res.openid;
                console.log('success');
                wx.showModal({
                  title: '确认用此ID登陆',
                  content: '每个人只能回答一次，未选择点下一题以0分计算',
                  success: function(yes){
                    console.log(yes);
                    that.sendUserInfoToServer();
                  }
                })
                
                
              
            }
          })
        }
      }
    })
  },
  sendUserInfoToServer: function () {
    //wx.setStorageSync('complete', 0)
    console.log('now send user info to server');
    let opidflag = wx.getStorageSync('complete');
    let score = wx.getStorageSync('score')
    if(opidflag==1)
    {
      //已答题
      wx.showModal({
        title: 'Warning',
        content: '你已经答过题了，快滚！\n分数为：'+ score,
      })
    }else{
      app.globalData.sum = 0;
      wx.navigateTo({
        url: '/pages/index/index',
      })
    }
  }
})