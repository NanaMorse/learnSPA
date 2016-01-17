/**
 * Created by nana on 2016/1/15.
 */
define(function(require, exports, module){
/*    var socket = require('io')();
    var $map = require('./$map');


    function init(){
        bindEvent();
    }

    function bindEvent(){
        var $msg = $map.msg;

        $msg.sendMsgBtn.on('click', function(){
            var msgVal = $msg.msgIpt.val().trim();

            if(msgVal === ''){
                return false;
            }

            socket.emit('chatMsg', msgVal);
            $msg.msgIpt.val('');
        });

        $msg.msgIpt.on('keydown', function(e){
            if(e.keyCode === 13){
                $msg.sendMsgBtn.trigger('click');
            }
        });

        socket.on('chatMsg', function(msg){
            $msg.msgList.append('<li>' + msg + '</li>');
        });
    }


    module.exports = {
        'init' : init
    }*/


    var config = require('config');
    var utils = require('utils');

    // 设置ajax服务别名
    seajs.config({
        'alias' : {
            'service' : config.baseIndex + '/service/service'
        }
    });

    //todo 在此处绑定hashchange事件，并设置当前页的hash

    utils.loadPage(config.firstPage);

});