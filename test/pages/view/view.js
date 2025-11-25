// pages/view/view.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    singerList: ["周杰伦", "林俊杰", "陶喆", "李孟泽", "其他"],
    playlist: [
      { image: "/images/music/半岛铁盒.png", text: "半岛铁盒-周杰伦" },
      { image: "/images/music/普通朋友.png", text: "普通朋友-陶喆" },
      { image: "/images/music/江南.jpg", text: "江南-林俊杰" },
      { image: "/images/music/爱我还是他.jpg", text: "爱我还是他-陶喆" },
      { image: "/images/music/不潮不用花钱.png", text: "不潮不用花钱-林俊杰" },
      { image: "/images/music/红尘客栈.jpg", text: "红尘客栈-周杰伦" }
    ],
    songList: [
      {
        cover: "/images/music/普通朋友.png",
        title: "天天（Close To You）",
        tag: "Hi-Res",
        desc: "",
        singer: "陶喆-im OK"
      },
      {
        cover: "/images/music/句号.png",
        title: "句号（Full Stop）",
        tag: "Spatial Audio",
        desc: "",
        singer: "G.E.M.邓紫棋-摩天动物园"
      },
      {
        cover: "/images/music/我怀念的.png",
        title: "我怀念的",
        tag: "超清母带",
        desc: "",
        singer: "孙燕姿-逆光"
      },
      {
        cover: "/images/music/我们的歌.jpg",
        title: "我们的歌",
        tag: "VIP",
        desc: "",
        singer: "王力宏-改变自己"
      },
      {
        cover: "/images/music/李白.jpg",
        title: "李白",
        tag: "VIP",
        desc: "",
        singer: "李荣浩-模特"
      }
    ]
  },
  toup() {
    console.log("滚动视图达到世界最高堂——礼堂！")
  },
  playSong(e) {
    const index = e.currentTarget.dataset.index;
    console.log('点击的歌曲索引:', index); // 添加日志确认索引
    wx.setStorageSync('playIndex', index);
    console.log('设置的歌曲索引:', wx.getStorageSync('playIndex')); // 确认缓存是否正确设置
    wx.switchTab({
      url: '/pages/play/play',
      success: function (res) {
        console.log('播放成功');
      },
      fail: function (err) {
        console.error('播放失败', err);
      }
    });
  },
  /*运用了wx.navigateTo进行页面转换*/ 
  onSingerTap() {
    wx.navigateTo({
      url: '/pages/jay/jay',
      success: function (res) {
        console.log('成功跳转到 jay ');
      },
      fail: function (err) {
        console.error('跳转 jay 失败', err);
      }
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