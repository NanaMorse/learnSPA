define(function(require, exports, module){
    var $ = require('$');
    var service = require('service').service;
    var utils = require('utils');

    var $map;
    var $page = $("#page_login");

    function init(){
        $map = {
            'loginBtn' : $page.find('#loginBtn'),
            'userNameIpt' : $page.find('#userNameIpt'),
            'passwordIpt' : $page.find('#passwordIpt')
        };
    }

    function bindEvent(){
        $map.loginBtn.on('click', function(){
            var userName = $map.loginBtn.val().trim();
            var password = $map.loginBtn.val().trim();

            //todo 添加字段校验，控制input提示
            var param = {
                'userName' : userName,
                'password' : password
            };

            login(param, function(){
                console.log('登录成功！');
                utils.loadPage('friendList');
            });
        });
    }

    /**
     * @description 登录聊天室
     * @param {Object} param
     * @param {Function} doneFunc
     **/
    function login(param, doneFunc){
        //todo 暂时用明文传输
        var failFunc = function(){
            console.log('登录失败！');
        };
        service.login(param).done(doneFunc).fail(failFunc);
    }


    module.exports = {
        'init' : init,
        'bindEvent' : bindEvent
    };
});