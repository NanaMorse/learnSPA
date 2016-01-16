define(function(require, exports, module){
    var $ = require('$');

    var $map;
    var $page = $("#page_login");

    function init(){
        $map = {
            'loginBtn' : $page.find('#loginBtn')
        }
    }

    function bindEvent(){
        $map.loginBtn.on('click', function(){
            console.log('尝试登陆');
        });
    }


    module.exports = {
        'init' : init,
        'bindEvent' : bindEvent
    };
});