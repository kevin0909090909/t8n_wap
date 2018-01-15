/************************************************
 *	数据验证组件
 * 	用于表单上传或数据上传时验证
 * 	数据验证规则函数可自行添加
 * 	lz暂时只用着一些
 * 	此方式参考CI框架中表单验证方式
 *  github地址：https://github.com/lzuntalented/lzVerify
 *
 * 	@author lz
 * 	@time 20160317
 *************************************************
 *  使用实例
 * 		var phone = '12345678901';
 * 		var password = 'a123456';
 * 		var data = {
 * 			'phone' : lzVerify.setRule(phone,'手机号格式不正确','only_number|str_length[11]'),
 * 			'password' : lzVerify.setRule(password,'密码格式不正确','only_number|str_length[8-20]')
 * 		}
 *
 * 		var msg = lzVerify.getErrorMsg(true);
 * 		if(!msg){
 *			alert(msg);//数据验证不通过
 *		}
 *
 *		数据验证通过
 ************************************************
 */
;(function(){
	/*数据验证*/
	function lzVerify(){
		this.version = '1.0.0';
	}

	lzVerify.prototype.errorMsg = false;//出错提示

	/*获取验证出错提示
	 * @param tag 设置此值以便立即清理验证规则
	 */
	lzVerify.prototype.getErrorMsg = function (tag){
		var msg = this.errorMsg;
		tag && this.clearRule();
		return msg;
	}

	/*清理验证规则*/
	lzVerify.prototype.clearRule = function (){
		this.errorMsg = false;
	}

	//===========================验证规则函数begin=============================
	/*
	 * 正整数验证规则
	 * @param value 待验证的值
	 * */
	lzVerify.prototype.number_greater_0 = function (value){
		var ret = /^[1-9]\d*$/.test(value);
		return ret;
	}

	/*
	 * 纯数字验证规则
	 * @param value 待验证的值
	 * */
	lzVerify.prototype.only_number = function (value){
		var ret = /[^0-9]/.test(value);
		return !ret;
	}

	/*
	 * 字符长度验证规则
	 * @param value 待验证的值
	 * @param param 待验证的值的长度格式
	 * 				[1] 字符长度等于1
	 * 				[1-9] 字符长度大于1 小于9
	 * 				[1-] 字符长度大于1
	 * 				[-9] 字符长度小于9
	 */
	lzVerify.prototype.str_length = function (value,param){
		var list = param.split("-");
		if(list.length == 1){
			return value.length == list[0];
		}else{
			if(list[0] == ""){
				return value.length < list[1];
			}else if(list[1] == ""){
				return value.length > list[0]
			}

			return value.length > list[0] && value.length < list[1];
		}
	}

	/*
	 * 手机号验证规则
	 * @param value 待验证的值
	 * */
	lzVerify.prototype.mobile = function (value){
		var ret = /^1[34578]\d{9}$/.test(value);
		return ret;
	}

	/*
	 * 中文字符验证规则
	 * @param value 待验证的值
	 * */
	lzVerify.prototype.china_char = function (value){
		var ret = /[^\u4e00-\u9fa5]/.test(value);
		return !ret;
	}

	/*
	 * 纯字母验证规则
	 * @param value 待验证的值
	 * */
	lzVerify.prototype.alpha = function (value){
		var ret = /[^a-zA-Z]/.test(value);
		return !ret;
	}

	//===========================验证规则函数end=============================

	/*
	 * 设置验证的规则
	 * @param value 待验证的值
	 * @param errorMsg 出错提示
	 * @param ruleName 验证规则名
	 * 					string类型 使用自带的函数名
	 * 					function类型 使用自定义函数,并且返回值为真时才表示验证通过 =>>> 函数原型function(data) data为待验证值
	 * */
	lzVerify.prototype.setRule = function (value,errorMsg,ruleName){
		if(this.errorMsg) return ;//在一组验证规则下，出错一次就不进行验证

		if(typeof ruleName === "function"){//若规则名为函数，则执行指定函数，该函数必须返回处理结果的正确与否
			var result = ruleName(value);
			if(!result) this.errorMsg = errorMsg;//自定义验证规则不通过，直接返回
			return;
		}

		var rules = ruleName.split("|");//规则名以|分隔
		for(var i in rules){
			var func_name = rules[i];//规则方法名
			var param = rules[i].split('[');//规则参数使用[]包围

			if(param.length == 2){
				func_name = param[0];
				param = param[1].substr(0,param[1].length - 1);
			}

			var str = 'this.' + func_name + '("' + value + '","' + param +'")';//拼接待指定的验证字符串
			var ret = eval(str);//动态执行验证规则

			if(!ret) {//有一个规则错误，则退出验证
				this.errorMsg = errorMsg;
				return;
			}
		}

		return value;//规则正确，返回验证值
	}

	window.lzVerify = window.lzVerify || new lzVerify();//绑定命名空间
})();
