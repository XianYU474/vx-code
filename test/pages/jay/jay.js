// pages/jay/jay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     // 热门作品数据（示例，可扩展）
     hotWorks: [
      { id: 1, cover: "/images/music/半岛铁盒.png", name: "半岛铁盒", comment: "评论1w+" },
      { id: 2, cover: "/images/music/红尘客栈.jpg", name: "红尘客栈", comment: "评论8k+" },
      { id: 3, cover: "/images/music/晴天.jpg", name: "晴天", comment: "评论5k+" },
      { id: 4, cover: "/images/music/霍元甲.jpg", name: "霍元甲", comment: "评论2w+" }
    ]
  },
      // 播放全部按钮事件
  playAll() {
    wx.showToast({ 
      title: '即将播放热门作品', 
      icon: 'none' 
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})