/**
 * Created by Administrator on 2017/3/10.
 */
import {AjaxRequest,API,CODE} from "../utils/Ajax"
import {PUBLICDATA} from "../common/PublicData"

import CookieTooler from '../utils/Cookie'

import store from "../Status"
import router from "../Router"

export default {
	getData (param) {
		AjaxRequest.get(API.INTRODUCE, param, function(obj){
			if(obj && obj.error == CODE.SUCCESS ){
				store.commit('setIntroduceRate',obj.data);
			}else if(obj){
				lzTooler.toast(obj.data);
			}else {
				lzTooler.toast("网络错误");
			}
		});
	}
}