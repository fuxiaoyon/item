   // 获取元素
   var wrap = document.getElementById("wrap");
   var box = document.querySelector(".box");
   var bigArea = document.getElementById("bigArea");
   // 计算系数  小的镜片 比 右边的放大镜
   // var r = box.clientWidth / bigArea.clientWidth;
   var r = (wrap.clientWidth - box.clientWidth) / (800 - bigArea.clientWidth);
   //鼠标进入事件
   wrap.onmouseenter = function () {
           box.style.display = "block";
           bigArea.style.display = "block";
   }
   //鼠标离开事件
   wrap.onmouseleave = function() {
       box.style.display = "none";
       bigArea.style.display = "none";
   }
   wrap.on
   // 绑定鼠标按下事件
   box.onmousedown = function(e) {
       /* 鼠标按下时 记住鼠标此时的在视口中的位置 */
       var x = e.clientX;
       var y = e.clientY;

       // 记住鼠标按下时 元素的定位值
       var left = box.offsetLeft;
       var top = box.offsetTop;
       console.log("鼠标按下");
       document.onmousemove = function(e) {
           var moved_x = e.clientX;
           var moved_y = e.clientY;

           var resultX = left + moved_x - x;
           var resultY = top + moved_y - y;
           if (resultX < 0) {
               resultX = 0;
           } else if (resultX > wrap.clientWidth - box.clientWidth) {
               resultX = wrap.clientWidth - box.clientWidth;
           }

           if (resultY < 0) {
               resultY = 0;
           } else if (resultY > wrap.clientHeight - box.clientHeight) {
               resultY = wrap.clientHeight - box.clientHeight;
           }                
           box.style.left = resultX + "px";
           box.style.top = resultY + "px";
           /* 鼠标移动之后记住鼠标移动后的位置 这两个值相减 就是鼠标移动的距离 这个距离就是box元素相对于鼠标按下时定位值的变化距离  */
           console.log("鼠标移动");
           bigArea.style.backgroundPositionX = -resultX / r + "px";
           bigArea.style.backgroundPositionY = -resultY / r+ "px";
       }
   }
   document.onmouseup = function() {
       document.onmousemove = null;
   }
