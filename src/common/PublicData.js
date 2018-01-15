/**
* @Date:   2017-01-05T17:05:54+08:00
* @Last modified time: 2017-01-18T15:07:26+08:00
*/

// //router 相关
// const ROUTER_LOGIN = "/l";//登录
// const ROUTER_FROGET = "/forget";//忘记密码
// const ROUTER_HOME = "/";//首页
// const ROUTER_CUSTOMER = "/customer";//客户
// const ROUTER_ABOUT = "/about";//关于
//
// // ajax 相关
// const CODE_SUCCESS = 0;//正常的返回值
export const PUBLICDATA = {
  //router 相关
  ROUTER_LOGIN : "/l",//登录
  ROUTER_FROGET : "/forget",//忘记密码
  ROUTER_HOME : "/",//首页
  ROUTER_CUSTOMER : "/customer",//客户
  ROUTER_CUSTOMER_v2 : "/v2/customer",//客户
  ROUTER_BIRTHDAY_v2 : "/v2/birthday",//客户
  ROUTER_DUETOREMIND_v2 : "/v2/dueRemind",//客户
  ROUTER_ABOUT: "/about",//关于
  ROUTER_ACHIEVEMENTRANK: "/achievementrank",//业绩排行榜
  ROUTER_ACHIEVEMENTSALARY: "/achievementsalary",//业绩及薪资
  ROUTER_ACHIEVEMENTSALARY_V2: "/v2/achievementsalary",//业绩及薪资
  ROUTER_ACHIEVEMENTMOUTHSALARY: "/achievementmouthsalary",//月份业绩及薪资
  ROUTER_ACHIEVEMENTMOUTHSALARY_v2: "/v2/achievementmouthsalary",//月份业绩及薪资
  ROUTER_CUSTOMERLIST: "/customerlist",//客户列表
  ROUTER_CUSTOMERLIST_v2: "/v2/customerlist",//客户列表
  ROUTER_CUSTOMERDETAIL: "/customerdetail",//客户详情
  ROUTER_CUSTOMERDETAIL_v2: "/v2/customerdetail",//客户详情
  ROUTER_PRODUCTNOTICE: "/productnotice",//产品上线公告
  ROUTER_INTRODUCEUP: "/introduceup",//晋升及薪资制度介绍
  ROUTER_INTRODUCEUP_v2: "/v2/introduceup",//晋升及薪资制度介绍
  ROUTER_PASSWORDCHANGE: "/v2/passwordchange",//密码修改
  ROUTER_ABOUTCOMPANY: "/aboutcompany",//公司简介
  ROUTER_ABOUTBUSINESS: "/aboutbusiness",//业务介绍
  ROUTER_ABOUTSAFETY: "/aboutsafety",//业务介绍
  ROUTER_MYACCOUNT: "/myaccount",//我的账户
  ROUTER_ACCOUNTINFO: "/v2/accountinfo",//我的账户
  ROUTER_HOME_V2 : "/v2",

  // ajax 相关
  CODE_SUCCESS: 0,//正常的返回值

  // cookie 相关
  COOKIE_UID : 'token',//用户登录凭证
  COOKIE_VERSION : 'version',//显示版本

  //接口地址
  API_LOGIN:  "/a.php",//登录
}
