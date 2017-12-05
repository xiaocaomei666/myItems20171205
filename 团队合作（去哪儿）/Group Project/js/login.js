/**
 * Created by LENOVO on 2017/9/4.
 */
$(function () {
    var flag = false;
    //登录
    $(".btn").click(function () {
        flag = false;
        var inputStr1 = $(".account>input").val();
        var inputStr2 = $(".pwd>input").val();
        $(".account>input").val("");
        $(".pwd>input").val("");
        var arrT = [];
        var objT = {
            account:inputStr1,
            pwd:inputStr2
        }
        arrT.push(objT);
        store.set("login",arrT);
        $.each(store.get("username"),function (index,value) {
            if((value.account == store.get("login")[0].account) && (value.pwd == store.get("login")[0].pwd)){
                store.set("index",value.id);
                $(".btn").attr("href","userabout.html");
                flag =true;
                return false;
            }
        })
        if(!flag){
            alert("密码错误");
        }
    })
})
