/**
 * Created by Nana on 2016/1/17.
 */

exports = module.exports = {
    // 在对象或者数组上遍历，模仿jquery.each的实现
    "each" : function(obj, callback){
        var i = 0, len, value,
            isArray = this.isArrayLike(obj);

        if(isArray){
            for(len = obj.length; i < len; i++){
                value = callback.call(obj[i], i, obj[i]);
                if (value === false){
                    break;
                }
            }
        }else{
            for(i in obj){
                if(obj.hasOwnProperty(i)){
                    value = callback.call(obj[i], i, obj[i]);
                    if (value === false){
                        break;
                    }
                }
            }
        }
    },

    // 判断一个对象是否是数组或者是类数组
    "isArrayLike" : function(obj){
        var length = obj.length;

        if({}.toString.call(obj) === "[object Function]"){
            return false;
        }

        return Array.isArray(obj) || length === 0 ||
            typeof length === "number" && length > 0 && (length - 1) in obj;
    },


    // 包装职责链函数
    'getChainNode' : function(fn){
        return new Chain(fn);
    }
};

/* 职责链构造器 start */
var Chain = function(fn){
    this.fn = fn;
    this.nextNode = null;
};

Chain.prototype.setNextNode = function(node){
    return this.nextNode = node;
};

Chain.prototype.next = function(){
    return this.nextNode && this.nextNode.startChain.apply(this.nextNode, arguments);
};

Chain.prototype.startChain = function(){
    this.fn.apply(this, arguments);
};
/* 职责链构造器 end */