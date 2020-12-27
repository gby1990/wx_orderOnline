// pages/lesssons/xunjiu.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

		//scrollview 高度
		windowHeight: 0,    //高度
		currentTab: 0,	 	//导航栏指向
		cart: [],			//购物车
		cartTotal: 0,		//购物车件数
		cartTotalPrice: 0,   //购物车价格总计
		foodList: [            // 分类
			{
				id: 0,
        name: '熏灸理疗',
    
			},
			{
				id: 1,
				name: '艾灸理疗'
			},
			{
				id: 2,
				name: '艾草日化'
			},
    ],
    imgUrls:[
      'https://pic.downk.cc/item/5fe8f58c3ffa7d37b316051a.jpg',
      'https://pic.downk.cc/item/5fe8f5d23ffa7d37b31616fe.jpg',
      'https://pic.downk.cc/item/5fe663523ffa7d37b3a922b1.jpg',
     'https://pic.downk.cc/item/5fe663523ffa7d37b3a922b3.jpg',
     'https://pic.downk.cc/item/5fe663523ffa7d37b3a922b6.jpg',
     'https://pic.downk.cc/item/5fe663523ffa7d37b3a922b9.jpg',
     'https://pic.downk.cc/item/5fe663523ffa7d37b3a922bc.jpg',
     'https://pic.downk.cc/item/5fe663db3ffa7d37b3a955c9.jpg',
     'https://pic.downk.cc/item/5fe8fc8c3ffa7d37b317d3c3.jpg',
     'https://pic.downk.cc/item/5fe8ff513ffa7d37b318862a.jpg',
     'https://pic.downk.cc/item/5fe8ff513ffa7d37b318862c.jpg',
     'https://pic.downk.cc/item/5fe8ff513ffa7d37b318862f.jpg',
     'https://pic.downk.cc/item/5fe8ff513ffa7d37b3188634.jpg',

    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

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