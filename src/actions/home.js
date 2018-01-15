/**
* @Author: lz
* @Date:   2017-01-10T10:42:16+08:00
* @Last modified by:   lz
* @Last modified time: 2017-01-11T16:25:12+08:00
*/


import {AjaxRequest,API,CODE} from "../utils/Ajax"
import {PUBLICDATA} from "../common/PublicData"

import CookieTooler from '../utils/Cookie'

import store from "../Status"
import router from "../Router"

export default {
  getData (param) {
    AjaxRequest.get(API.HOME, param, function(obj){
      if(obj && obj.error == CODE.SUCCESS ){
        store.commit('setTabHome',obj.data);
      }else if(obj){
        lzTooler.toast(obj.data);
      }else {
        lzTooler.toast("网络错误");
      }
    });
  }
}
