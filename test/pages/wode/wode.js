// pages/wode/wode.js
Page({
  data: {
    // 歌单数据（示例，可扩展）
    playlists: [
      { 
        cover: "/images/个人/1.jpg", // 封面图路径
        title: "我喜欢的音乐", 
        desc: "1425首 · 9083次播放" 
      },
      { 
        cover: "/images/music/logo.png", 
        title: "听歌排行", 
        desc: "累计听歌16664首" 
      },
      { 
        cover: "/images/个人/2.jpg", 
        title: "爱的多的人总是先掉眼泪", 
        desc: "歌单 · 99首" 
      },
      { 
        cover: "/images/个人/3.jpg", 
        title: "干嘛听苦情歌以为多浪漫", 
        desc: "歌单 · 66首" 
      },
      { 
        cover: "/images/个人/添加.png", 
        title: "新建歌单", 
        desc: "" 
      }
    ]
  },

  onLoad() {
    // 若需动态加载数据，可在此处调用接口
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