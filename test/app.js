// app.js
App({
  onLaunch() {
    console.log("app onLauch!");
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
    onShow: function (options) {
      console.log("app onShow");
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.console.log("app onHide!");
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  globalData: {
    userInfo: null,
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
  }
})