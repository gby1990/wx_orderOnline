// pages/index/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      'https://pic.downk.cc/item/5fe663743ffa7d37b3a92f32.png',
      'https://pic.downk.cc/item/5fe8f10f3ffa7d37b314db9d.png',
      'https://pic.downk.cc/item/5fe663743ffa7d37b3a92f35.png',
      'https://pic.downk.cc/item/5fe663743ffa7d37b3a92f3c.png',
     
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    interval1: 2000,
    duration: 1000, //	滑动动画时长1s
    //功能模块
    //大嘴头条图标
    headlinesImg: "../../assets/icons/toutiao.png",
    //大嘴头条内容
    headLines: [],
    components: [{
    image:'https://pic.downk.cc/item/5fe663db3ffa7d37b3a955df.png',
    function:"熏灸疗法",
    },
    {
      image:'https://pic.downk.cc/item/5fe663743ffa7d37b3a92f2d.png',
      function:"艾灸疗法",
    },
    {
      image:'https://pic.downk.cc/item/5fe663743ffa7d37b3a92f2a.jpg',
      function:"艾草产品",
    },
    ],
    //新品菜
    newGoods: [],
    //经典菜
    classicGoods: [],
    classifyList: [
    {
    url:'https://pic.downk.cc/item/5fe663db3ffa7d37b3a955e8.png',
    name: "9.9元购买100元消费券", 
    price: "9.9",
    introduce:"购买日起三个月有效",}
    ],
  },

  changeTo: (event) => {
    console.log(event);
    let where = event.currentTarget.dataset.where;
    console.log(where);
    if (where === "orderFood") {
      wx.switchTab({
        url: `/pages/${where}/${where}`,
      })
    } else {
      wx.navigateTo({
        // queryString 查询字符串 ?
        url: `/pages/class/${where}/${where}`,
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 加载的时候从easymoc获取全局数据
    wx.request({
      url: '',
      complete: res => {
        console.log(res);
        app.globalData.classifyList = res.data;
        console.log(app.globalData.classifyList);
        this.setData({
          classifyList: app.globalData.classifyList.myTrump,
          newGoods: app.globalData.classifyList.newGoods,
          classicGoods: app.globalData.classifyList.classicGoods,
          components: app.globalData.classifyList.components,
          headLines: app.globalData.classifyList.headLines,
      });
      },
    });

    
  console.log(111);
  console.log(this.data.classifyList);
  },
  // 添加购物车操作
  ordinInCart: function(e){
    
    console.log(e);
    let id = e.currentTarget.dataset.id;
    let classifyList = this.data.classifyList;
    let carts = app.globalData.carts;
    for(let item of classifyList)
    {
      if (item.id == id  && item.stock) {
        if (!item.selected) {
          console.log("addsuccess");
          carts.push(item);
          app.globalData.cartTotal++;
          app.globalData.cartTotalPrice += item.price;
          item.selected = true;
          wx.showToast({
            title: '已添加到购物车',
            icon: "success",
            duration: 750,
          });
        }else if(item.selected){
          app.globalData.carts = carts.filter((cartItem)=>{   //filter返回新数组，所以不能用carts接受，
                                    //不然app.globalData.carts不能改变
             return cartItem.id !=id;
           }); 
          console.log("deletesuccess");
          app.globalData.cartTotal--;
          app.globalData.cartTotalPrice -= item.price;
          item.selected = false;
        }
      }
      
    }
    console.log( this.data.classifyList);
    this.setData({
			cart : app.globalData.carts,
			cartTotal: app.globalData.cartTotal,
			cartTotalPrice : app.globalData.cartTotalPrice,
			classifyList: this.data.classifyList,
		});
		app.globalData.classifyList.myTrump=this.data.classifyList;
       //将信息加入全局的购物车中
       console.log(this.data.classifyList);
		console.log(app.globalData.carts);
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
    this.setData({
      classifyList: app.globalData.classifyList.myTrump,
      newGoods: app.globalData.classifyList.newGoods,
      classicGoods: app.globalData.classifyList.classicGoods,
      components: app.globalData.classifyList.components,
      headLines: app.globalData.classifyList.headLines,

  });
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