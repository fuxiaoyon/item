
var wrap = document.getElementById("wrap");
var box = document.querySelector(".box");
var bigArea = document.getElementById("bigArea");

var r = (wrap.clientWidth - box.clientWidth) / (800 - bigArea.clientWidth);

wrap.onmouseenter = function () {
    box.style.display = "block";
    bigArea.style.display = "block";
}

wrap.onmouseleave = function () {
    box.style.display = "none";
    bigArea.style.display = "none";
}
wrap.on

box.onmousedown = function (e) {
    var x = e.clientX;
    var y = e.clientY;
    var left = box.offsetLeft;
    var top = box.offsetTop;

    document.onmousemove = function (e) {
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

        bigArea.style.backgroundPositionX = -resultX / r + "px";
        bigArea.style.backgroundPositionY = -resultY / r + "px";
    }
}
document.onmouseup = function () {
    document.onmousemove = null;
}
