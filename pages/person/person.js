// pages/peoson/person.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfoList: {     //商品信息
     first: [{
        icon: '../../assets/icons/coupon.png',
        text: '新客户优惠券',
        alreadRead: true,
        unreadNum: 1,
        mes: "10元代金券",
      }, 
  
      {
        icon: '../../assets/icons/friend.png',
        text: '成为合作商',
        alreadRead: false,
        unreadNum: 0,
        mes: "火热加盟中",
      }, ],

     second:[
       {
        icon: '../../assets/icons/yinhangka.png',
        text: '充值活动',
        alreadRead: false,
        unreadNum: 0,
        mes: "满50减10",
      }, 
    
      {
        icon: '../../assets/icons/lipinka.png',
        text: '礼品卡',
        alreadRead: false,
        unreadNum: 0,
        mes: "电子卡赠亲友",
      },
      
      {
        icon: '../../assets/icons/kefu.png',
        text: '联系客服',
        alreadRead: false,
        unreadNum: 0,
        mes: "",
      }, 
   
    ],
    third: [
      {
        icon: '../../assets/icons/mendian.png',
        text: '灸疗门店',
        alreadRead: false,
        unreadNum: 0,
        mes: "",
      }, 
      {
        icon: '../../assets/icons/share.png',
        text: '分享',
        alreadRead: false,
        unreadNum: 0,
        mes: "",
      }, 
    ]
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //调用应用实例的方法获取全局数据

    // console.log(app.globalData.userInfo);
    if (!app.globalData.userInfo) {
      console.log("从全局global获取到了");
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }else {
      console.log("failed");
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          console.log("首次从global对象获取失败");
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

  },

  //button按钮 设置bindgetuserinfo可以加载用户信息  现在没加
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    console.log(this.data.userInfo);
  },
  // getUserInfo: function (e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },
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