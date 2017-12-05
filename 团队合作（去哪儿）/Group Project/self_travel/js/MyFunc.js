/**
 * Created by Administrator on 2017/7/26.
 */
/**
 * 获取滚动距离
 * scroll().left 获取网页左侧被卷去的距离
 * scroll().top 获取网页顶部被卷去的距离
 * @returns {*}
 */
function scroll() {
    if(window.pageYOffset || window.pageXOffset){
        // IE9+ 和最新的浏览器
        var obj = {
            top:window.pageYOffset,
            left:window.pageXOffset
        };
        return obj;
    }else if(document.compatMode == 'CSS1Compat'){
        // 标准模式
        return {
            top:document.documentElement.scrollTop,
            left:document.documentElement.scrollLeft
        }
    }else {
        // 怪异模式
        return {
            top:document.body.scrollTop,
            left:document.body.scrollLeft
        }
    }
}
/**
 * 根据字符串获取盒子
 * @param id
 * @returns {Element}
 */
function $(id) {
    return document.getElementById(id);
}
//  /** + enter
/**
 * 获取屏幕的宽度和高度
 *
 * @returns {*}
 */
function client() {
    if (window.innerWidth || window.innerHeight) {
        // IE9+ 和最新浏览器
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    } else if (document.compatMode == 'CSS1Compat') {
        // w3c标准
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    } else {
        // 怪异浏览器
        return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        }
    }
}
/**
 * 匀速动画
 * @param obj 要做动画的盒子
 * @param speed 速度
 * @param target 目标值
 */
function linear(obj,speed,target) {
    // 如果到位就直接返回
    if(obj.offsetLeft == target) {
        return;
    }

    clearInterval(obj.timer);
    

    // 添加匀速动画
    // 判断方向
    var dir = obj.offsetLeft > target ? -speed : speed;

    obj.timer = setInterval(function () {
        obj.style.left = obj.offsetLeft + dir + 'px';

        // 目标值-盒子左边的距离 < 速度 清空定时器
        if (Math.abs(target - obj.offsetLeft) < Math.abs(dir)){
            // 已经到位
            clearInterval(obj.timer);
            // 设置目标值
            obj.style.left = target + 'px';
        }
    },10);
}

/**
 * 缓动动画
 * @param obj 要做动画的对象
 * @param data 哪些属性要做动画
 * @param fn 回调函数
 */
function buffer(obj,data,fn) {
    // 1.清空定时器
    clearInterval(obj.timer);
    // 2.开启定时器
    var begin = 0;
    var target = 0;
    obj.timer = setInterval(function () {
        // 标志 代表所有的属性到达目的
        // 如果为true 到达指定位置 如果为false 没有到达指定位置
        var flg = true;

        for(var k in data){
            // 1.获取速度
            if(k == 'opacity'){
                if(getCssVaule(obj, k) == 0){
                    begin = 0;
                }else {
                    //　获取不到值或者　是其值
                    begin = parseInt(getCssVaule(obj, k) * 100) || 100;
                }
                target = parseInt(data[k] * 100);
            }else if(k == 'scrollTop') {
                // 滚动距离
                begin = obj.scrollTop;
                target = data[k];
            }else {
                begin = parseInt(getCssVaule(obj, k)) || 0;
                target = data[k];
            }
            var speed = (target - begin) / 10;

            // 2.判断是 向上取整还是向下取整
            speed = begin > target ? Math.floor(speed) : Math.ceil(speed);

            // 3.设置值
            if(k == 'opacity'){
                obj.style.opacity = (begin + speed)/100;
                // IE9 以下
                obj.style.filter = 'alpha(opacity:'+(begin + speed)+')';
            }else if(k == 'scrollTop'){
                obj.scrollTop = begin + speed;
            }else if(k == "zIndex"){
                obj.style.zIndex = data[k];
            } else {
                obj.style[k] = begin + speed + 'px';
            }

            // 4.清空定时器
            // 当所有的人到达目的地比赛(定时器清空)结束
            if (parseInt(begin) == parseInt(target)) {
                // 属性相等不做操作
                // 设置目标值
                obj.style[k] = target + 'px';
            }else {
                // 属性没有到达指定位置
                flg = false;
            }
        }
        // 4.清空定时器
        // 当所有的人到达目的地比赛(定时器清空)结束
        if (flg) {
            clearInterval(obj.timer);
            // 动画执行完毕要执行的代码
            if (fn) fn();
        }
    }, 10);
}
/**
 * 获取盒子的属性值
 * @param obj 盒子
 * @param attr 要获取的属性
 * @returns {*} 获取到的属性值
 */
function getCssVaule(obj, attr) {
    if (obj.currentStyle) {
        // IE 和Opera
        return obj.currentStyle[attr];
    } else {
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