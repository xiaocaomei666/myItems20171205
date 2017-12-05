/**
 * Created by Administrator on 2017/8/29.
 */

function GET(objT)
{
    return Ajax("get",objT);
}
function POST(objT)
{
    return Ajax("post",objT);
}

function Ajax(type,objT) {

    //url,obj,success,error,timerOut
    var url = objT["url"];
    var obj = objT["obj"];

    //001 创建请求对象
    var xhr;
    if(window.XMLHttpRequest)
    {
        xhr = new XMLHttpRequest();
    }else
    {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    var arr = [];
    for(var key in obj)
    {
        arr.push(key+"="+obj[key]);
    }
    var res = arr.join("&");

    if(type == "get")
    {
        url = url + "?" + "key=" + Math.random() + "&" + res;
        url = encodeURI(url);
        xhr.open("get",url,true);
        xhr.send();
    }else if(type = "post")
    {
        xhr.open("post",url,true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(res);
    }

    //004 监听网络请求的状态
    xhr.onreadystatechange = function () {
        //005 解析服务器返回的数据
        if(xhr.readyState == 4)
        {
            //取消定时器
            clearTimeout(timer);
            if(xhr.status == 200)
            {
                objT.success(xhr);
            }else
            {
                objT.error(xhr);
            }
        }
    };
    //console.log("_____end_____");


    //定时器设置默认值
    var timerOut = objT.timerOut || 10000;
    //定时器处理请求超时的问题
    var timer = setTimeout(function () {
        //取消网络请求并且提示用户
        xhr.abort();

        alert("请检查网络连接");
    },timerOut);
}