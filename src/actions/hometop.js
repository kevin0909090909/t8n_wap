/**
* @Author: lz
* @Date:   2017-01-11T14:09:08+08:00
* @Last modified by:   lz
* @Last modified time: 2017-01-11T14:12:04+08:00
*/



import {AjaxRequest,API,CODE} from "../utils/Ajax"
import {PUBLICDATA} from "../common/PublicData"

import CookieTooler from '../utils/Cookie'

import store from "../Status"
import router from "../Router"

export default {
  get_uinfo (param) {
    AjaxRequest.get(API.GET_UINFO,function(obj){
      if(obj && obj.error == CODE.SUCCESS ){
        store.commit('setUserInfo',obj.data);
      }else if(obj){
        lzTooler.toast(obj.data);
      }else {
        lzTooler.toast("数据加载失败");
      }
    });
  }
}
