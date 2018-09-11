/**
 * 前端路由
 * @author : wangyong
 * @since : 2017年11月9日
 * @version : v0.0.1
 */
//工具集合Tools
window.T = {};

// 获取请求参数
// 使用示例
// location.href = http://localhost/index.html?id=123
// T.p('id') --> 123;
var url = function(name) {
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return  unescape(r[2]); return null;
};
T.p = url;

//请求前缀
//var baseURL = "/";

//rest api 域

// var customerURL = "http://customer.lingyongka.com/";
// var customerRestURL = "http://customer-api.lingyongka.com/";
// var merchantURL = "http://merchant.lingyongka.com/";
// var merchantRestURL = "http://merchant-api.lingyongka.com/";

var customerURL = "http://customer.natapp1.cc/";
var customerRestURL = "http://customer-api.natapp1.cc/";
var merchantURL = "http://merchant.natapp1.cc/";
var merchantRestURL = "http://merchant-api.natapp1.cc/";

//登录token
var token = sessionStorage.getItem("token");
//if(token == 'null'){
 //   parent.location.href = baseURL + 'login.html';
//}

//jquery全局配置
$.ajaxSetup({
	dataType: "json",
	cache: false,
    headers: {
        "token": token
    },
    complete: function(xhr) {
//  	token过期，则跳转到登录页面 暂不处理
//        if(xhr.responseJSON.code == 401){
//            parent.location.href = baseURL + '/login';
//        }
    }
});


//权限判断
function hasPermission(permission) {
    if (window.parent.permissions.indexOf(permission) > -1) {
        return true;
    } else {
        return false;
    }
}

//重写alert
// window.alert = function(msg, callback){
// 	parent.layer.alert(msg, function(index){
// 		parent.layer.close(index);
// 		if(typeof(callback) === "function"){
// 			callback("ok");
// 		}
// 	});
// }


//重写confirm式样框
window.confirm = function(msg, callback){
	parent.layer.confirm(msg, {btn: ['确定','取消']},
	function(){//确定事件
		if(typeof(callback) === "function"){
			callback("ok");
		}
	});
}