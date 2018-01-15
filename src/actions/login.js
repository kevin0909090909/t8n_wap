/**
* @Author: lz
* @Date:   2017-01-10T10:42:16+08:00
* @Last modified by:   lz
* @Last modified time: 2017-01-18T11:24:52+08:00
*/


import {AjaxRequest,API,CODE} from "../utils/Ajax"
import {PUBLICDATA} from "../common/PublicData"

import CookieTooler from '../utils/Cookie'

import store from "../Status"
import router from "../Router"

export default {
  login (param,showMaskCallback) {
    AjaxRequest.post(API.LOGIN,param,function(obj){
      if(obj && obj.error == CODE.SUCCESS ){
        if(obj.data.first == "Y"){
          showMaskCallback();
        }else{
          store.commit('login');
          store.commit('setUserInfo',obj.data);
          //todo 这里需要更改，根据team_attr_id来判断
          CookieTooler(PUBLICDATA.COOKIE_UID, obj.data.id)
	        if(obj.data.version && obj.data.version == "v2"){
		        CookieTooler(PUBLICDATA.COOKIE_VERSION, "v2");
		        //判断是否直营网点，员工或者代理网点
		        router.push(PUBLICDATA.ROUTER_HOME_V2)

		        let items =  [
			        {
				        'txt': '业绩',
				        'link': PUBLICDATA.ROUTER_HOME_V2
			        },
			        {
				        'txt': '客户',
				        'link': PUBLICDATA.ROUTER_CUSTOMER_v2
			        },
			        {
				        'txt': '关于',
				        'link': PUBLICDATA.ROUTER_ABOUT
			        }
		        ];

		        store.commit("setItems", items);
	        }else{
		        let items =  [
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
		        ];
						//归属理财团队则进入1.0
		        store.commit("setItems", items);
		        router.push(PUBLICDATA.ROUTER_HOME)
	       }
        }
      }else if(obj){
        lzTooler.toast(obj.data);
      }else {
        lzTooler.toast("登录失败");
      }
    });
  }
}
