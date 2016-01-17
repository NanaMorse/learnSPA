/**
 * Created by Nana on 2016/1/17.
 */

exports = module.exports = funcRouter;

var fs = require("fs");
var utils = require('../tools/utils');


// 功能号中间路由
function funcRouter(req, res){
    var body = req.body;
    var funcNo = body.funcNo;

    check(funcNo, res, function(){
        var funcPath = './funclib/func' + funcNo;
        require(funcPath)(body, res);
    });
}

/**
 * @description 对传参功能号进行检测
 * @param {String} funcNo
 * @param {Object} res
 * @param {Function} callback
 **/
function check(funcNo, res, callback){
    // 检测功能号是否为空
    var emptyFuncNo = utils.getChainNode(function(funcNo){
        ('' + funcNo) ? this.next(funcNo)
            : sendError(res, '001', '功能号为空');
    });

    // 检测是否存在对应的功能号处理函数
    var noProcessFunc = utils.getChainNode(function(funcNo){
        var path = './functions/funclib/func' + funcNo + '.js';
        var self = this;
        fs.exists(path, function(result){
            result ? self.next(funcNo)
                : sendError(res, '002', '功能号处理函数缺失');
        });
    });

    // 设置职责链
    emptyFuncNo.setNextNode(noProcessFunc).setNextNode(utils.getChainNode(callback));
    // 启动职责链
    emptyFuncNo.startChain(funcNo);
}

/**
 * @description 返回错误信息
 * @param {Object} res response对象
 * @param {String} errorNo 错误号
 * @param {String} errorMsg 错误提示
 **/
function sendError(res, errorNo, errorMsg){
    res.json({
        'errorNo' : errorNo,
        'errorMsg' : errorMsg
    });
}
