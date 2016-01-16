// 工具类方法
define(function(require, exports, module){
    var config = require('config');
    var $ = require('$');
    var $mainContainer = $('#mainContainer');


    /**
     * @description 加载页面
     * @param pageName {String} 页面名称
     **/
    function loadPage(pageName){
        //todo 未来版本中使用location.hash来管理应用状态
        // 获取该页面相关信息
        var pathInfo = getPathInfo(pageName),
            pageId = pathInfo.pageId,
            pagePath = pathInfo.pagePath,
            jsPath = pathInfo.jsPath;

        document.getElementById(pageId) ?
            showPage(pageId) : $.ajax(pagePath).done(function(data){
            // 填充单页内容
            $mainContainer.append(data);
            // 显示当前页
            showPage(pageId);
            // 加载页面对应js
            loadModule(jsPath, true);
        });

        function showPage(pageId){
            $mainContainer.find('.singlePage').hide();
            $('#' + pageId).show();
        }
    }


    /**
     * @description 根据页面名称获取页面相关信息
     * @param pageName {String} 页面名称
     **/
    function getPathInfo(pageName){
        return {
            'pageId' : 'page_' + pageName,
            'pagePath' : config.baseIndex + '/view/' + pageName + '.html',
            'jsPath' : config.baseIndex + '/js/' + pageName + '.js'
        }
    }

    /**
     * @description 根据路径加载js
     * @param jsPath {String} js模块所在路径
     * @param doInvoke {Boolean} 是否执行模块的init与bindEvent操作
     **/
    function loadModule(jsPath, doInvoke){
        seajs.use(jsPath, function(module){
            doInvoke && invokeModule(module);
        });
        function invokeModule(module){
            module.init();
            module.bindEvent();
        }
    }


    module.exports = {
        loadPage : loadPage
    };
});