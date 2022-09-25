Component({
  //状态
  data: {
    isCreated:true,
    isHidden:true,
    name: "梅连成",
    ids: ["aaa", "bbb", "ccc"],
    list: ["梅春林", "梅铁旦", "梅文华", "梅保华",
      // "梅建成", "梅根成",
      // "梅连成", "梅喜成", "梅鑫成", "梅恺乐"
    ]
  },
  properties: {},
  methods: {
    handelTap(){
      console.log(this.data.name,"9999");
      this.setData({
        name:this.data.name==="梅连成"?"张智慧":this.data.name==="张智慧"?"梅连成":null,
        isHidden:!this.data.isHidden
      })
    },
  }
})
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {

//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {

//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   }
// })