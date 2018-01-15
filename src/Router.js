/**
* @Date:   2017-01-03T11:12:48+08:00
* @Last modified time: 2017-01-22T11:10:08+08:00
*/

import Vue from 'vue'
import VueRouter from 'vue-router'

import {PUBLICDATA} from './common/PublicData'

import Login from './components/Login'
import Forget from './components/Forget'

import Home from './components/tabs/Home'
import Customer from './components/tabs/Customer'
import Customer_v2 from './components/v2/CustomerList_v2.vue'
import BirthdayRemind from './components/v2/BirthdayRemind_v2.vue'
import DueToRemind from './components/v2/DueToRemind.vue'
import About from './components/tabs/About'
import Status from './Status'

import AchievementRank from './components/AchievementRank'
import AchievementSalary from './components/AchievementSalary'
import AchievementSalary_v2 from './components/v2/AchievementSalary_v2'
import AchievementMouthSalary from './components/AchievementMouthSalary'
import AchievementMouthSalary_v2 from './components/v2/AchievementMouthSalary_v2.vue'

import CustomerList from './components/CustomerList'
import CustomerList_v2 from './components/v2/CustomerList2_v2'
import CustomerDetail from './components/CustomerDetail'
import CustomerDetail_v2 from './components/v2/CustomerDetail_v2'

import ProductNotice from './components/ProductNotice'
import IntroduceUp from './components/IntroduceUp'
import IntroduceUp_v2 from './components/v2/IntroduceUp_v2.vue'

import AboutCompany from './components/AboutCompany'
import AboutBusiness from './components/AboutBusiness'
import AboutSafety from './components/AboutSafety'
import PasswordChange from './components/v2/PasswordChange_v2.vue'
import MyAccount from './components/MyAccount.vue'
import AccountInfo from './components/v2/AccountInfo.vue'

import Error from './components/Error'

import Home_v2 from './components/v2/Home_v2.vue'
import cookieTooler from './utils/Cookie'

Vue.use(VueRouter)
// Vue.use(Tabs)

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })

// const App = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
let routes = [
  {
    path: PUBLICDATA.ROUTER_HOME,
    name: 'home',
    component: Home
  },
  { path: PUBLICDATA.ROUTER_CUSTOMER, component: Customer },
  { path: PUBLICDATA.ROUTER_CUSTOMER_v2, component: Customer_v2 },
  { path: PUBLICDATA.ROUTER_BIRTHDAY_v2, component: BirthdayRemind },
  { path: PUBLICDATA.ROUTER_DUETOREMIND_v2, component: DueToRemind },
  { path: PUBLICDATA.ROUTER_ABOUT, component: About },
  { path: PUBLICDATA.ROUTER_LOGIN, component: Login },
  { path: PUBLICDATA.ROUTER_FROGET, component: Forget },
  { path: PUBLICDATA.ROUTER_ACHIEVEMENTRANK, component: AchievementRank },
  { path: PUBLICDATA.ROUTER_ACHIEVEMENTSALARY, component: AchievementSalary },
  { path: PUBLICDATA.ROUTER_ACHIEVEMENTSALARY_V2, component: AchievementSalary_v2 },
  { path: PUBLICDATA.ROUTER_ACHIEVEMENTMOUTHSALARY, component: AchievementMouthSalary },
  { path: PUBLICDATA.ROUTER_ACHIEVEMENTMOUTHSALARY_v2, component: AchievementMouthSalary_v2 },
  { path: PUBLICDATA.ROUTER_CUSTOMERLIST, component: CustomerList },
  { path: PUBLICDATA.ROUTER_CUSTOMERLIST_v2, component: CustomerList_v2 },
  { path: PUBLICDATA.ROUTER_CUSTOMERDETAIL, component: CustomerDetail },
  { path: PUBLICDATA.ROUTER_CUSTOMERDETAIL_v2, component: CustomerDetail_v2 },
  { path: PUBLICDATA.ROUTER_PRODUCTNOTICE, component: ProductNotice },
  { path: PUBLICDATA.ROUTER_INTRODUCEUP, component: IntroduceUp },
  { path: PUBLICDATA.ROUTER_INTRODUCEUP_v2, component: IntroduceUp_v2 },
  { path: PUBLICDATA.ROUTER_ABOUTCOMPANY, component: AboutCompany },
  { path: PUBLICDATA.ROUTER_ABOUTBUSINESS, component: AboutBusiness },
  { path: PUBLICDATA.ROUTER_ABOUTSAFETY, component: AboutSafety },
  { path: PUBLICDATA.ROUTER_HOME_V2, component: Home_v2, name: 'home_v2' },
    {path: PUBLICDATA.ROUTER_PASSWORDCHANGE, component: PasswordChange},
    {path: PUBLICDATA.ROUTER_MYACCOUNT, component: MyAccount},
    {path: PUBLICDATA.ROUTER_ACCOUNTINFO, component: AccountInfo}
]

let version = cookieTooler(PUBLICDATA.COOKIE_VERSION);
if(version && version == 'v2'){
  routes.push({
	  path: '*',
	  component: Home_v2
  })
}else{
	routes.push({
		path: '*',
		component: Home
	})
}

/*手机端浏览器检测*/
function mobilecheck() {
	var a = !1;
	return function(b) {
		(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))) && (a = !0)
	}(navigator.userAgent || navigator.vendor || window.opera), a
}

/*是否微信浏览器*/
function isWeixin() {
	var a = navigator.userAgent.toLowerCase();
	return "micromessenger" == a.match(/MicroMessenger/i) ? !0 : !1
}

let browser_mobile = mobilecheck();
if(!browser_mobile){
  routes = [
    {
      path: '*',
      component: Error
    }
  ]
}

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

router.beforeEach((to, from, next) => {
  if(to.path == PUBLICDATA.ROUTER_FROGET){
    if (!Status.state.is_login) {
      next();
    }else{
      next(PUBLICDATA.ROUTER_HOME);
    }
  }else if (to.path !== PUBLICDATA.ROUTER_LOGIN) {
    if (!Status.state.is_login) {
      next(PUBLICDATA.ROUTER_LOGIN)
      return
    }
  }
  next()
})

export default router
