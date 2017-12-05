/**
 * Created by Administrator on 2017/9/3.
 */
$(function () {
    //01 监听鼠标移入li标签
    $("li").click(function () {
        var index = $(this).index();
        $(".content-top>div").eq(index).addClass("current").siblings().removeClass("current");
    })
})
