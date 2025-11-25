// pages/new/new.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("new.onload!")

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log("new.onReady!")

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log("new.onShow!")

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("new.onHide!")

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log("new.onUnload!")

  },
press(){
  console.log("补药再点我啦！")
},
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log("new.onPullDownRefresh!")

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log("new.onReachBottom!")

  },
  onPageScroll(){
    console.log("new onPageScroll!")
  },
onTabItemTap(e){
  console.log("new onTabItemTap!")
  console.log(e)
},
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage(e) {
    console.log("new.onSharAppMessage!")
    console.log(e)
    return{
      title:"我的分享",
      path:"pages/logs/logs",
      imageUrl:"/images/图标-7.png"
    }

  }
})