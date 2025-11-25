// test/pages/play/play.js
Page({
  data: {
    currentSong: null,
    // 歌曲列表
    songList: [
      {
        name: "天天（Close To You）",
        singer: " 陶喆 ",
        cover: "/images/music/普通朋友.png", // 本地封面
        url: "/audios/天天 - 陶喆.mp3", // 本地音频
        lyric: [
          "天天（Close To You）- 陶喆",
          "作词：陶喆",
          "作曲：陶喆",
          "编曲：陶喆",
          "太阳天或下雨天 ",
          "人挤人的咖啡厅",
          "找一个能想你舒服的角落 ",
          "看着情人肩靠肩",
          "慢慢转开我实现 yeh yeh ",
          "有个女孩让我好想念",
          // 歌词
        ]
      },
      {
        name: "句号（Full Stop）",
        singer: " G.E.M.邓紫棋 ",
        cover: "/images/music/句号.png", // 本地封面
        url: "/audios/句号 - G.E.M.邓紫棋.mp3", // 本地音频
        lyric: [
          "句号（Full Stop）- G.E.M.邓紫棋",
          "作词：G.E.M.邓紫棋",
          "作曲：G.E.M.邓紫棋",
          "编曲：G.E.M.邓紫棋/T-Ma",
          "制作人：G.E.M.邓紫棋/T-Ma",
          "可惜我们终于来到 ",
          "一个句号",
          "窗外不愿飞的蜂鸟 ",
          "也在哀悼",
          "城市再也不会听到",
          "有我们争吵",
          // 歌词
        ]
      },
      {
        name: "我怀念的",
        singer: " 孙燕姿",
        cover: "/images/music/我怀念的.png", // 本地封面
        url: "/audios/我怀念的 - 孙燕姿.mp3", // 本地音频
        lyric: [
          "我怀念的 – 孙燕姿 (Stefanie Sun)",
          "词：姚若龙",
          "曲：李偲菘",
          "编曲：Martin Tang",
          "我问为什么 ",
          "那女孩传简讯给我",
          "而你为什么 ",
          "不解释低着头沉默",
          "我该相信你很爱我 ",
          "不愿意敷衍我",
          // 歌词
        ]
      },
      {
        name: "我们的歌",
        singer: "王力宏",
        cover: "/images/music/我们的歌.jpg", // 封面
        url: "/audios/我们的歌 - 王力宏.mp3", // 音频
        lyric: [
          "我们的歌-王力宏",
          "填词：王力宏、陈信延",
          "谱曲：王力宏",
          "已经听了一百遍 ",
          "怎么听都不会倦",
          "从白天唱到黑夜 ",
          "你一直在身边",
          "一直在身边",
          "如果世界太危险 ",
          "只有身边最安全",
          // 歌词...
        ]
      },
      {
        name: "李白",
        singer: "李荣浩",
        cover: "/images/music/李白.jpg", // 封面
        url: "/audios/李白 - 李荣浩.mp3", // 音频
        lyric: [
          "李白-李荣浩",
          "作词：李荣浩",
          "作曲：李荣浩",
          "编曲：李荣浩",
          "制作人：李荣浩",
          "大部分人要我学习去看",
          "世俗的眼光",
          "我认真学习了世俗眼光 ",
          "世俗到天亮",
          "一部外国电影没听懂一句话",
          "看完结局才是笑话 ",
          "你看我多么聪明多么听话 多奸诈",
          // 歌词...
        ]
      },
      {
        name: "不为谁而做的歌",
        singer: "林俊杰",
        cover: "/images/music/江南.jpg", // 封面
        url: "/audios/不为谁而作的歌 - 林俊杰.mp3", // 音频
        lyric: [
          "已经听了一百遍 怎么听都不会倦",
          "从白天唱到黑夜 你一直在身边",
          "一直在身边",
          // 歌词...
        ]
      },
      {
        name: "匆匆那年",
        singer: "王菲",
        cover: "/images/music/匆匆那年.jpg", // 封面
        url: "/audios/匆匆那年(电影《匆匆那年》主题曲) - 王菲.mp3", // 音频
        lyric: [
          "匆匆那年，我们究竟说了几遍再见",
          "之后再拖延，可惜谁有没有爱过",
          "不是一场七情上面的雄辩，匆匆那年",
          // 歌词...
        ]
      }
      
    ],
    // 评论数据（示例）
    comments: [
      { username: "每天都上课的李孟泽", content: "我最喜欢上付婷婷老师的微信小程序课了！" },
      { username: "李想", content: "兄弟，其实我每节课都跟上了" },
      { username: "李新宇", content: "老师讲的我全会了" },
      { username: "张群翔", content: "唔你们再说什么，这不是听歌的评论区吗" }
    ],
    inputValue: "" ,// 绑定textarea的输入值


    currentIndex: 0, // 当前播放歌曲索引
    isPlaying: false, // 播放状态
    coverAnimation: {}, // 封面旋转动画
    lyricHeight: 150, // 歌词滚动容器高度，可根据需求调整
    progress: 0, // 播放进度（0 - 100）
    duration: 0, // 歌曲总时长（秒）
    currentTime: "00:00", // 当前播放时间显示
    durationTime: "00:00", // 总时长显示
    audioCtx: null // 音频上下文对象
     
  },

  onLoad() {
    // 读取本地缓存中的歌曲索引
    const playIndex = wx.getStorageSync('playIndex');
    const { songList } = this.data;
    let currentIndex = 0;

    if (playIndex !== undefined && playIndex < songList.length) {
      currentIndex = playIndex;
    }

    console.log('读取的歌曲索引:', currentIndex); // 添加日志确认索引

    // 从 songList 中提取当前歌曲
    const currentSong = songList[currentIndex];
    this.setData({ 
      currentSong,
      currentIndex,
      audioCtx: wx.createInnerAudioContext()
    });

    // 初始化音频和动画
    this.initAudio();
    this.initCoverAnimation();

    // 自动播放
    this.togglePlay();
  },

  loadSong() {
    // 读取本地缓存中的歌曲索引
    const playIndex = wx.getStorageSync('playIndex');
    const { songList } = this.data;
    let currentIndex = 0;

    if (playIndex !== undefined && playIndex < songList.length) {
      currentIndex = playIndex;
    }

    console.log('播放的歌曲索引:', currentIndex);

    // 从 songList 中提取当前歌曲
    const currentSong = songList[currentIndex];
    this.setData({ 
      currentSong,
      currentIndex,
      audioCtx: wx.createInnerAudioContext()
    });

    // 初始化音频和动画
    this.initAudio();
    this.initCoverAnimation();

    // 自动播放
    this.togglePlay();
  },
  // 初始化音频
  initAudio() {
    const { audioCtx, currentSong } = this.data; // 直接用 currentSong
    if (!currentSong) {
      console.error("currentSong 未初始化！");
      return;
    }
    audioCtx.src = currentSong.url; // 现在 currentSong 已定义
    // 监听音频加载完成，获取总时长
    audioCtx.onCanplay(() => {
      setTimeout(() => {
        this.setData({
          duration: audioCtx.duration,
          durationTime: this.formatTime(audioCtx.duration)
        });
      }, 500);
    });
    // 监听播放进度更新
    audioCtx.onTimeUpdate(() => {
      const currentTime = audioCtx.currentTime;
      this.setData({
        progress: (currentTime / this.data.duration) * 100,
        currentTime: this.formatTime(currentTime)
      });
    });
  },

  // 初始化封面旋转动画
  initCoverAnimation() {
    const animation = wx.createAnimation({
      duration: 100000, // 旋转一周时长
      timingFunction: "linear",
      iterationCount: "infinite" // 无限循环
    });
    animation.rotate(360).step();
    this.setData({
      coverAnimation: animation.export()
    });
  },

  // 播放/暂停切换
  togglePlay() {
    const { audioCtx, isPlaying } = this.data;
    if (isPlaying) {
      audioCtx.pause();
    } else {
      audioCtx.play();
    }
    this.setData({
      isPlaying: !isPlaying
    });
  },

  // 切换歌曲（上一首/下一首）
  switchSong(e) {
    const type = e.currentTarget.dataset.type;
    let { currentIndex, songList } = this.data;
    
    // 1. 计算新索引
    if (type === "prev") {
      currentIndex = currentIndex === 0 ? songList.length - 1 : currentIndex - 1;
    } else {
      currentIndex = currentIndex === songList.length - 1 ? 0 : currentIndex + 1;
    }
    
    // 2. 同时更新 currentIndex 和 currentSong（关键！）
    this.setData({ 
      currentIndex,
      currentSong: songList[currentIndex] // 从列表中获取新歌曲
    });
    
    // 3. 重新初始化音频（使用新的 currentSong）
    this.initAudio();
    
    // 4. 重置进度
    this.setData({
      progress: 0,
      currentTime: "00:00"
    });
    
    // 5. 切换后自动播放
    this.togglePlay();
  },

  // 更新播放进度
  updateProgress(e) {
    const progress = e.detail.value;
    const { audioCtx, duration } = this.data;
    audioCtx.seek((progress / 100) * duration);
  },

  // 时间格式化
  formatTime(seconds) {
    const minute = Math.floor(seconds / 60);
    const second = Math.floor(seconds % 60);
    return (
      (minute < 10 ? "0" + minute : minute) + 
      ":" + 
      (second < 10 ? "0" + second : second)
    );
  },

  onUnload() {
    // 页面卸载时销毁音频上下文，释放资源
    this.data.audioCtx.destroy();
  },
// 监听textarea输入变化
onTextareaChange(e) {
  this.setData({
    inputValue: e.detail.value
  });
},

// 发送评论
sendComment() {
  const { inputValue, comments } = this.data;
  if (!inputValue.trim()) { // 空内容校验
    wx.showToast({ title: '请输入评论', icon: 'none' });
    return;
  }

  // 模拟用户
  const newComment = {
    username: "思念化作鱼（我）", 
    content: inputValue
  };

  // 添加评论到列表（顶部展示，也可改为 push 放到末尾）
  comments.unshift(newComment);
  this.setData({
    comments,
    inputValue: "" // 清空输入框
  });

  // 可选：滚动到评论列表顶部
  this.setData({ scrollTop: 0 });
},

  // 点击返回按钮跳转回 view 界面
  goBackToView() {
    wx.switchTab({
      url: '/pages/view/view',
      success: function (res) {
        console.log('成功跳转回首页');
      },
      fail: function (err) {
        console.error('跳转回首页失败', err);
      }
    });
  }
});