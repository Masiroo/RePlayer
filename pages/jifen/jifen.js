var count=0;
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    point: 0
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let cmp = wx.getStorageSync('complete');
    if(cmp != 1){
      count = app.globalDate.sum;
      count = count*5;
      if(count != 100)
        this.setData({ point: count});
      else if(count ==100)
      {
        
        this.setData({ point: 'SS' });
      }
      wx.setStorageSync('complete', 1);
      wx.setStorageSync('score', count)
    }else if(cmp == 1){
      let score = wx.getStorageSync('score');
      if (score != 100)
        this.setData({ point: score });
      else if (score == 100) {
        this.setData({ point: 'SS' });
      }
    }
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