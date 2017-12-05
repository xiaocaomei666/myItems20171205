/**
 * Created by LENOVO on 2017/9/4.
 */
function keyWord(obj) {
    var oUl =  document.querySelector(".current") || document.createElement("ul");
    $(oUl).addClass("current");

    $(".serch").append(oUl);
    oUl.innerHTML = "";
    var arr = obj["s"];
    for (var i = 0; i < arr.length; i++) {
        var oLi = document.createElement("li");
        oLi.innerHTML = arr[i];
        oUl.appendChild(oLi)
    }
}
$(function () {
    $(".nav>ul>li").eq(2).click(function () {
        location.href = "strategy/strategy.html"
    })
    $(".nav>ul>li").eq(1).click(function () {
        location.href = "旅游吧/tourism.html"
    })
    // $("#tour").click(function () {
    //     location.href = "tour/tour.html"
    //     console.log(1);
    // })
    var footIndex = 0;
    var index = 0;
    var flag = false;
    $(".nav>ul>li").hover(function () {
        $(this).children().stop().fadeToggle()
    })
    $(".main").mouseenter(function () {
        $(this).children("span").stop().fadeIn();
        $(this).children(".foot").stop().slideDown()
    })
    $(".main").mouseleave(function () {
        $(this).children("span").stop().fadeOut();
        $(this).children(".foot").stop().slideUp()
    })
    $("#btn_L").click(function () {
        if (flag)return
        flag = true;
        footIndex++;
        index++;
        if (index > 5) {
            index = 1;
            $(".slide").css({"left": 0})
        }
        if(footIndex > 4){
            footIndex = 0;
        }
        if(footIndex%2 == 0){
            $(".slide_foot>li").eq(footIndex).addClass("left").siblings().removeClass("left right");
        }else{
            $(".slide_foot>li").eq(footIndex).addClass("right").siblings().removeClass("left right");
        }

        $(".slide").animate({"left": -$(".slide>li>img").eq(0).width() * index}, function () {flag = false});
    })
    $("#btn_R").click(function () {
        if (flag)return
        flag = true;
        index--;
        footIndex--;
        if (index < 0) {
            index = 4;
            $(".slide").css({"left": -(1194 * 5)})
        }
        if(footIndex < 0){
            footIndex = 4;
        }
        if(footIndex%2 == 0){
            $(".slide_foot>li").eq(footIndex).addClass("left").siblings().removeClass("left right");
        }else{
            $(".slide_foot>li").eq(footIndex).addClass("right").siblings().removeClass("left right");
        }
        $(".slide").animate({"left": -$(".slide>li>img").eq(0).width() * index}, function () {flag = false});
    })
    $("input").keyup(function () {
        var inputStr = $("input").val();
        if(!inputStr){
            $(".current").remove();
            return;
        }
        $("#jsonP").remove();
        var oScript = document.createElement("script");
        oScript.setAttribute("src","https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+inputStr+"&sugmode=2&json=1&p=3&sid=22949_1454_24182_21127_20930&req=2&bs=abc&pbs=abc&csor=3&pwd=abc&cb=keyWord&_=1504346476007");
        oScript.setAttribute("id","jsonP")
        document.body.appendChild(oScript);
    })
    $(".serch").on("click","li",function () {
        $("input").val($(this).html())
    })
    $(".serch a").click(function () {
        var inputStr =  $("input").val();
        $(this).attr({"href":"https://www.baidu.com/s?wd="+inputStr+"&rsv_spt=1&rsv_iqid=0xb5ed2d76000e6d32&issp=1&f=3&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=0&rsv_sug3=2&rsv_sug1=1&rsv_sug7=100&prefixsug=sd&rsp=1&inputT=1333&rsv_sug4=1333","target":"_blank"})
    })
    $(document).click(function () {
        $(".current").remove();
    })
})
