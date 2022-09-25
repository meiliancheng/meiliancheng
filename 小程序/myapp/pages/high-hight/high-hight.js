// pages/high-hight/high-hight.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:0,
    dataList:["衣服","鞋子","化妆品"]
  },
  changeTab(evt){
    // console.log(evt.target.dataset.myindex);
    // target 绑定当前事件 元素  接收不到下级dom 所带的参数  currentTarget 当前元素  可以 接受到参数
    let index =evt.target.dataset.myindex ||evt.currentTarget.dataset.myindex;
    console.log(evt.currentTarget.dataset.myindex);
    this.setData({
      current:index
    })
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