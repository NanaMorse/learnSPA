/**
 * Created by Nana on 2016/1/17.
 */

// 登录接口
exports = module.exports = function(param, res){

    res.json({
        "error_no" : 0,
        "error_info" : "success",
        "results" : "成功登录" + param.userName
    });
};