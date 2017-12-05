/**
 * Created by 小草莓 on 2017/7/23.
 */

/**
 * 匀速动画
 * @param obj 要做动画的盒子
 * @param speed 速度
 * @param target 目标值
 */
function linear(obj,speed,target){
    // 如果到位就直接返回
    if(obj.offsetLeft == target) {
        return;
    }
    clearInterval(obj.timer);
    //添加匀速动画
    //判断方向
    var dir = obj.offsetLeft > target  ? -speed : speed;
    obj.timer=setInterval(function () {
        obj.style.left=obj.offsetLeft+ dir +'px';
        //目标值-盒子左边的距离<速度，则清空定时器
        if(Math.abs(target-obj.offsetLeft)<Math.abs(dir)){
            clearInterval(obj.timer);
            obj.style.left=target+'px';
        }
    },10)
}

/**
 * 缓动动画
 * @param obj  要做动画的对象
 * @param data  哪些属性要做动画
 * @param fn  回调函数
 */
function animate(obj,data,fn){
    //清空定时器
    clearInterval(obj.timer);
    //开启定时器
    var begin=0;
    var target=0;
    obj.timer=setInterval(function () {
        //标志，代表所有的属性到达目的地，如果为TRUE，表示到达指定位置，否则没有到达
        var flag=true;
        for(var key in data) {
            //1.获取速度
            if (key == 'opacity') {
                //为了使取整后不为0，乘以100.后面如果没有设置透明度则默认为100
               if (getCssVaule(obj, key) == 0) {
                        begin = 0;
                    } else {
                        begin = parseInt(getCssVaule(obj, key) * 100) || 100;
                    }
                    target = parseInt(data[key] * 100);
                } else if (key == 'scrollTop') {
                    // 滚动距离
                    begin = obj.scrollTop;
                    target = data[key];
                } else {
                    begin = parseInt(getCssVaule(obj, key)) || 0;
                    target = data[key];
                }
                var speed = (target - begin) / 10;
                //2.判断是向上取整还是向下取整
                speed = begin > target ? Math.floor(speed) : Math.ceil(speed);
                //3.设置值
                if (key == 'opacity') {
                    obj.style.opacity = (begin + speed) / 100;
                    obj.style.filter = 'alpha(opacity:' + (begin + speed) + ')';
                } else if (key == 'scrollTop') {
                    obj.scrollTop = begin + speed;
                } else if (key == "zIndex") {
                    obj.style.zIndex = data[key];
                } else {
                    obj.style[key] = begin + speed + 'px';
                }
                // 4.清空定时器
                // console.log(begin,target,speed);
                if (parseInt(begin) == parseInt(target)) {
                    obj.style[key] = target + 'px';
                } else {
                    flag = false
                }
            }
            if (flag) {
                //当全部到位，清除定时器
                clearInterval(obj.timer);
                console.log('清除了');
                //执行外界动画执行完毕要执行的代码
                if (fn) fn();
            }
        },10);
}
/**
 *动态获取css样式
 * @param obj  盒子
 * @param attr  要获到的属性
 * @returns {*}  获取到的属性值
 * getCssVaule(box,'width')
 */
function getCssVaule(obj,attr) {
    if(obj.currentStyle){
        // IE 和Opera
        return obj.currentStyle[attr];
    }else {
        // w3c标准不是 IE 和Opera
        return window.getComputedStyle(obj, null)[attr];
    }
}
/*
 * 判断浏览器
 */
function getOs() {
    var OsObject = "";
    if (isIE = navigator.userAgent.indexOf("MSIE") != -1) {
        return "MSIE";
    }
    if (isFirefox = navigator.userAgent.indexOf("Firefox") != -1) {
        return "Firefox";
    }
    if (isChrome = navigator.userAgent.indexOf("Chrome") != -1) {
        return "Chrome";
    }
    if (isSafari = navigator.userAgent.indexOf("Safari") != -1) {
        return "Safari";
    }
    if (isOpera = navigator.userAgent.indexOf("Opera") != -1) {
        return "Opera";
    }
}