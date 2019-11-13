;(function($){
    "use strict";
    $.fn.extend({
        banner:function(options){
            // console.log(this)
            // 因为this指向jq的DOM对象，放置重复属性，慎用
            this.obj = {};
            // 给this自定义对象，以供面向使用
            var that = this.obj;

            // 解析参数
            that.imgs = options.imgs;
            that.list = options.list==false ? false : true;
            that.autoPlay = options.autoPlay==false ? false : true;
            that.delayTime = options.delayTime || 3000;
            that.moveTime = options.moveTime || 300;

            // 假设当前索引为0
            that.index = 0;
            // 上一次走的是最后一张
            that.iPrev = that.imgs.length-1;

            // 判断是否存在按钮
            if(options.left!=undefined && options.left.length>0 && options.right!=undefined && options.right.length>0){
                // 绑定左右按钮事件
                options.left.click(function(){
                    // 计算索引
                    if(that.index == 0){
                        that.index = that.imgs.length-1;
                        that.iPrev = 0;
                    }else{
                        that.index--;
                        that.iPrev = that.index+1;
                    }
                    // 开始移动，传入方向
                    that.btnMove(1)
                })
                options.right.click(function(){
                    // 计算索引
                    if(that.index == that.imgs.length-1){
                        that.index = 0;
                        that.iPrev = that.imgs.length-1;
                    }else{
                        that.index++;
                        that.iPrev = that.index-1;
                    }
                    // 开始移动，传入方向
                    that.btnMove(-1);
                })
                
                // 移动的功能，根据方向，移动：移动之前，先设置初始位置
                that.btnMove = function(t){
                    that.imgs.eq(that.iPrev).css({
                        left:0
                    }).stop().animate({
                        left:that.imgs.eq(0).width() * t
                    })
                    that.imgs.eq(that.index).css({
                        left:-that.imgs.eq(0).width() * t
                    }).stop().animate({
                        left:0
                    })
                }
                
            }
        }
    })
})(jQuery);
