/**
 * Created by Administrator on 2017/8/29.
 */

function GET(url,obj,success,error,timerOut) {
    //001 创建请求对象
    var xhr;
    if(window.XMLHttpRequest)
    {
        xhr = new XMLHttpRequest();
    }else
    {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //+ 缓存处理
    //(01) 时间戳
    //http://127.0.0.1/day02/php/03-get.php?key=1503973751167
    //http://127.0.0.1/day02/php/03-get.php?key=1503973750735
    //(02) 随机数
    //var date = new Date();
    //url = url + "?" + "key=" + date.getTime();

    //+ 参数处理
    //对象{username:zs,password:1234} == >username=zs&password=1234
    var arr = [];
    for(var key in obj)
    {
        arr.push(key+"="+obj[key]);
    }
    //console.log(arr);
    //==> ["username=zs","password=123"];
    var res = arr.join("&");
    //console.log(res);
    url = url + "?" + "key=" + Math.random() + "&" + res;

    //+ 中文转码处理
    console.log("转码前:",url);
    url = encodeURI(url);
    console.log("转码后",url);
    //002 设置请求方法和请求路径
    xhr.open("get",url,true);

    //003 发送请求
    xhr.send();

    //004 监听网络请求的状态
    xhr.onreadystatechange = function () {
        //005 解析服务器返回的数据
        if(xhr.readyState == 4)
        {
            //取消定时器
            clearTimeout(timer);
            if(xhr.status == 200)
            {
                success(xhr);
            }else
            {
                error(xhr);
            }
        }
    };
    console.log("_____end_____");


    //定时器设置默认值
    timerOut = timerOut || 10000;
    //定时器处理请求超时的问题
    var timer = setTimeout(function () {
        //取消网络请求并且提示用户
        xhr.abort();

        alert("请检查网络连接");
    },timerOut);
}
function POST(url,obj,success,error,timerOut){
    //01 创建请求对象
    var xhr;
    if(window.XMLHttpRequest)
    {
        xhr = new XMLHttpRequest();
    }else
    {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //02 设置请求路径和方法
    xhr.open("post",url,true);

    //+ 如何设置请求头
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    //03 发送请求
    var arr = [];
    for(var key in obj)
    {
        arr.push(key+"="+obj[key]);
    }
    var res = arr.join("&");
    xhr.send(res);

    //04 监听网络请求的状态
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4)
        {
            clearTimeout(timer);
            if(xhr.status == 200)
            {
                success(xhr);
            }else
            {
               error(xhr);
            }
        }
    }

    //定时器设置默认值
    timerOut = timerOut || 10000;
    //定时器处理请求超时的问题
    var timer = setTimeout(function () {
        //取消网络请求并且提示用户
        xhr.abort();

        alert("请检查网络连接");
    },timerOut);
}