/**
 * Created by LENOVO on 2017/9/5.
 */

$(function () {
    var arr = store.get("username") || [];
//注册
    var i =  store.get("username")[store.get("username").length-1].id +1 ||  0;
    $(".register_btn").click(function () {
        var inputStr3 = $(".reg_account").val();
        var inputStr4 = $(".reg_pwd").val();
        var inputStr5 = $(".reg_name").val();
        var inputStr6 = $(".reg_tel").val();
        if($.trim(inputStr6) =="" || $.trim(inputStr5) == "" || $.trim(inputStr4) == "" || $.trim(inputStr3) == ""){
            alert("输入内容不能为空");
            return;
        }
        var obj = {
            account:inputStr3,
            pwd:inputStr4,
            username:inputStr5,
            tel:inputStr6,
            id:i
        };
        arr.push(obj);
        store.set("username",arr);
        store.set("index",obj.id);
        $(this).attr("href","userabout.html");
        // $(".success").fadeIn();
    })
})