/**
* @Date:   2017-01-03T14:20:09+08:00
* @Last modified time: 2017-01-12T14:56:26+08:00
*/



import Vue from 'vue'
import Vuex from 'vuex'
import {PUBLICDATA} from './common/PublicData'
Vue.use(Vuex)

let Now = new Date()

const store = new Vuex.Store({
  state: {
    is_login: false,

    // 用户信息
    customerInfo: {
      birthday: '--',//手机号
      age: '--',//
      name: '--',//姓名
      phone: '--',//等级
      capital: '--',//头像
      sex: '--',//团队名称
    },
    userInfo:{
      mobile: '',//手机号
      id: '',//
      name: '',//姓名
      level: '',//等级
      head: '',//头像
      team: '',//团队名称
      new_rule: 'N'
    },

	  items: [
		  {
			  'txt': '业绩',
			  'link': PUBLICDATA.ROUTER_HOME
		  },
		  {
			  'txt': '客户',
			  'link': PUBLICDATA.ROUTER_CUSTOMER
		  },
		  {
			  'txt': '关于',
			  'link': PUBLICDATA.ROUTER_ABOUT
		  }
	  ],

    rate: {
    },

    activeTabIndex: 0,//当前tab显示的序号
    showTab: false,//当前tab是否需要显示标示

    //tab业绩信息
    tabHome: {
      "leave": 0,//本月业绩达标剩余金额
      "list": [],//本考核季业绩
      "rank": "暂无",//当前全国排名
      "year": Now.getFullYear() + "年",//年度
      "team_performance": 0,//团队业绩
      "contribution": "0%", //你的贡献
    },

    //tab客户信息
    tabCustomer: {
      "total": 0,//历史客户总数
      "all": 0,//投资客户总数
      "reg": 0,//新注册客户数
      "new": 0,//新增投资客户数
      "nreg": 0,//新增意向投资客户数
    },

    //客户列表
    customerList: [],
    select_key:{cstm_cate:'', asset_size:'', keyword:''},// 选择的筛选条件
    customerBirthList: [],
    customerDueList: [],
    customerDetailList: [],
    myamount:0,

  },
  mutations: {
    login (state) {
      state.is_login = true
    },
    loginOut (state) {
      state.is_login = false
    },
    getIsLogin (state) {
      return state.is_login
    },
    showTab (state) {
      state.showTab = true
    },
    hideTab (state) {
      state.showTab = false
    },

    setUserInfoMobile (state,mobile)  {
      state.userInfo.mobile = mobile;
    },
    setUserInfo (state,info) {
      for(let i in info){
        state.userInfo[i] = info[i];
      }
    },

    setItems(state, items){
      state.items = items
    },

    setActiveTabIndex (state,index)  {
      state.activeTabIndex = index;
    },

    setTabHome (state,list) {
      state.tabHome = list;
    },

    setTabCustomer (state,list) {
      state.tabCustomer = list;
    },

    setData (state,obj){
      state[obj.key] = obj.data;
    },

    setIntroduceRate(state, obj){
      state.rate = obj
    }
  }
})

export default store
