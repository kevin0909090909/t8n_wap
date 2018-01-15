/**
* @Author: lz
* @Date:   2017-01-10T10:42:16+08:00
* @Last modified by:   lz
* @Last modified time: 2017-01-13T16:03:29+08:00
*/


import {AjaxRequest,API,CODE} from "../utils/Ajax"
import {PUBLICDATA} from "../common/PublicData"

import CookieTooler from '../utils/Cookie'

import store from "../Status"
import router from "../Router"

export default {
  sendCode (param) {
    AjaxRequest.post(API.SENDCODE,param,function(obj){
      if(obj && obj.error == CODE.SUCCESS ){
        
      }else if(obj){
        lzTooler.toast(obj.data);
      }else {
        lzTooler.toast("网络错误");
      }
    });
  },
  reset (param) {
    AjaxRequest.post(API.RESET,param,function(obj){
      if(obj && obj.error == CODE.SUCCESS ){

      }else if(obj){
        lzTooler.toast(obj.data);
      }else {
        lzTooler.toast("网络错误");
      }
    });
  }
}
