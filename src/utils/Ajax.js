/**
 * @Author: lz
 * @Date:   2017-01-05T17:02:21+08:00
 * @Last modified by:   lz
 * @Last modified time: 2017-01-22T11:16:27+08:00
 */

import $ from "jquery";
import Router from '../Router';
import {PUBLICDATA} from '../common/PublicData'
import CookieTooler from './Cookie'
import crypto from 'crypto'

function md5 (text) {
    return crypto.createHash('md5').update(text).digest('hex');
}

// const urlHeader = "https://lcs-api.zjmax.com/";//线上域名
// const urlHeader = "http://lcs-api.zjmax.net/";//测试环境域名
const urlHeader = "http://localhost/licaishi/public/";//本机测试环境域名
const CODE_LOGIN = -10;

/*
 *将对象解析成键值对字符串，用于post信息
 * @param obj 需要解析的对象
 */
function objToStrForPost (obj){
    var result = "";
    if(typeof obj === "object"){
        for (var i in obj) {
            result += i + "=" + obj[i] + "&"
        }

        if(result.length > 0){
            result = result.substr(0,result.length - 1);
        }
    }else if(typeof obj === "string"){
        return obj;
    }

    return result;
}

function post (api,param,callback) {
    let uid = CookieTooler(PUBLICDATA.COOKIE_UID);
    if(uid) param["uid"] = uid;

    param["sign_time"] = Date.parse(new Date()) / 1000;
    let sign = md5(objToStrForPost(param));
    let query = "?sign_time=" + param["sign_time"] + "&sign=" + sign;
    delete param["sign_time"];

    $.post(urlHeader + api + query, param, function(obj){
        if(obj && obj.error == CODE_LOGIN){
            Router.push(PUBLICDATA.ROUTER_LOGIN);
            return ;
        }
        callback(obj);
    });
}

//get请求
function get (api,param,callback) {
    if(typeof param === "function"){
        callback = param;
        param = {};
    }
    let uid = CookieTooler(PUBLICDATA.COOKIE_UID);
    if(uid) param["uid"] = uid;

    param["sign_time"] = Date.parse(new Date()) / 1000;
    let sign = md5(objToStrForPost(param));
    let query = "?sign_time=" + param["sign_time"] + "&sign=" + sign;
    delete param["sign_time"];

    $.post(urlHeader + api + query, param, function(obj){
        if(obj && obj.error == CODE_LOGIN){
            Router.push(PUBLICDATA.ROUTER_LOGIN);
            return ;
        }
        callback(obj);
    });
}

export const AjaxRequest = {
    post: post,
    get: get
}

//接口地址
export const API = {
    LOGIN:  "main/login",//登录
    SENDCODE:  "main/sendcode",//获取验证码
    RESET:  "main/reset",//首页

    HOME:  "main/home",//首页
    INTRODUCE: "main/introduce",//奖励制度,
    GET_UINFO:  "main/get_uinfo",//获取用户基本信息
    CUSTOMER: "main/customer",//客户
    CUSTOMERLIST: "main/customerlist",//客户列表
    CUSTOMERDETAIL: "main/customerdetail",//客户详情
    CUSTOMERBIRTH: "main/customerlist_birth",//生日提醒客户列表
    CUSTOMERONDUE: "main/customerlist_ondue",//到期提醒客户列表
    RANK: "main/rank",//业绩排行榜
    SALARY: "main/salary",//业绩与薪资
    MOUTHSALARY: "main/mouthsalary",//月度业绩详情
    PRODUCT: "main/product",//月度业绩详情
    PASSWORD: "main/modify",//修改密码
    ACCOUNTINFO: "main/accountinfo", //账户信息
    GETCUSTOMERLIST:'main/getcustomerlist' // 带搜索的客户列表获取
}

// 返回值相关
export const CODE = {
    SUCCESS: 0,//正常的返回值
    LOGIN: CODE_LOGIN,
}
