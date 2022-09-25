// pages/todolist/todolist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:"",
    list:['name']
  },
  handelInput(evt){
    console.log("inputt",evt.detail.value);
    this.setData({
      value:evt.detail.value
    })
  },
  handelAdd(){
    if(!this.data.value)  return
    this.setData({
      value:"",
      list:[...this.data.list,this.data.value]
    })
  }, 
  currentReemove(event){
// console.log(event.currentTarget.dataset.index); 下标

    let index = event.currentTarget.dataset.index 
    this.data.list.splice(index,1)
    this.setData({
      list:this.data.list
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