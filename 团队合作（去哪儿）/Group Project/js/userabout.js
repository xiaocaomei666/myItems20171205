/**
 * Created by Administrator on 2017/9/3.
 */
$(function () {
    //01 监听鼠标移入li标签
    $("li").click(function () {
        var index = $(this).index();
        $(".content-top>div").eq(index).addClass("current").siblings().removeClass("current");
    })
    $(".name").html("名字：" + store.get("username")[store.get("index")].username)
    $(".phone").html("手机：" + store.get("username")[store.get("index")].tel)
    var accountStr = "<ul>"+
                     "<li><a>个人中心</a></li>"+
            "<li><a>账号设置</a></li>"+
    "<li><a>意见反馈</a></li>"+
    "<li><a href='login.html'>退出账号</a></li>"+
                "</ul>"
    $("#account").html(store.get("username")[store.get("index")].account + accountStr)
    $("#account").hover(function () {
        $(this).children().stop().slideToggle()
    })
    $("#account").on("mouseover mouseout","li",function () {
        $(this).children().addClass("cur").parent().siblings().children().removeClass("cur");
    })
})
