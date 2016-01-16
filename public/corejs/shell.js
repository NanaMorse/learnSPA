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

    utils.loadPage(config.firstPage);

});