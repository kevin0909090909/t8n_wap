/**
* @Author: lz
* @Date:   2017-01-10T10:42:16+08:00
* @Last modified by:   lz
* @Last modified time: 2017-01-12T16:48:59+08:00
*/


import {AjaxRequest,API,CODE} from "../utils/Ajax"

import CookieTooler from '../utils/Cookie'

import store from "../Status"
import router from "../Router"

export default {
  getData (param) {
    AjaxRequest.get(API.CUSTOMER,function(obj){
      if(obj && obj.error == CODE.SUCCESS ){
        store.commit('setTabCustomer',obj.data);
      }else if(obj){
        lzTooler.toast(obj.data);
      }else {
        lzTooler.toast("网络错误");
      }
    });
  }
}
