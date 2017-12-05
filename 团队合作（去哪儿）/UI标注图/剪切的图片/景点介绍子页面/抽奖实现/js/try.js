$(function () {
    $(".luck_ul>li").each(function (index, oLi) {
        var imgPath = "images/x-" + (index+1) + ".png";
        $(this).children("img").attr("src",imgPath);
    });

    $("#btn_luck").click(function () {
        var count = Math.floor(Math.random()*9) + 9;
        var currentCount = 0;
        var timerss = setInterval(function () {
            count--;
            if(count == 0){
                clearInterval(timerss);
                $(".mask_div").hide().fadeIn(200);
                $(".mask_div").children(".mask_ul").hide().fadeIn(200).children("li").eq(currentCount).hide().fadeIn(200).siblings().fadeOut(200);
                $("html body").click(function () {
                    $(".mask_div").hide();
                });
                return;
            }
            currentCount++;
            if(currentCount == 9){
                currentCount = 0;
            }
            $(".luck_ul>li").eq(currentCount).addClass("luck_choose").siblings().removeClass("luck_choose");
        },100)
    })
});