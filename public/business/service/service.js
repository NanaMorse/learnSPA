define(function(require, exports, module){
    var $ = require('$');

    var service = {};
    var router = '/function';

    /**
     * @description 登录接口
     * @param {Object} param 参数集
     * {
     *     userName : {String} 用户名
     *     password ：{String} 用户密码
     * }
     **/
    service.login = function(param){
        param.funcNo = '001';
        return $.post(router, param);
    };

    module.exports = {
        'service' : service
    };
});