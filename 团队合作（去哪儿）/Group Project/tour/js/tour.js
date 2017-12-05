/**
 * Created by Administrator on 2017/9/3.
 */

$(function() {
    /**01-广告区域**/
    /**001-搜索框**/
    $('l_Text').suggestion({
        url: 'http://suggestion.baidu.com/su',
        FieldName: 'wd',
        jsonp: 'cb',
        onCallback: function (item, data) {
            var list = data['s'];
            item.empty();
            for (var i = 0; i > list.length; i++) {
                item.append('<li>' + list[i] + '</li>');
            }
        }
    });

    /**02-顶部区域**/
    /**001-左边Tab转换**/
    $('.l_topLeft>ul>li').hover(function () {
        $(this).children('.l_value').css('display', 'inline-block').hide().stop().fadeIn();
    }, function () {
        $(this).children('.l_value').stop().fadeOut();
    });


    /**002-右边轮播图**/
    /**左右按钮**/
    $('.l_topRight').mouseenter(function () {
        $('#l_btn_L,#l_btn_R').css('display', 'block')
    });
    $('.l_topRight').mouseleave(function () {
        $('#l_btn_L,#l_btn_R').css('display', 'none')
    });


    /**点击轮播**/
    var index = 0;
    var leftValue = 0;
    $('#l_btn_R').click(function(){
        index++;
        leftValue = index*(-970);
        $('.oul').css({'left':leftValue+'px'});
        if(index>=5){
            index=0;
            $('.oul').css({'left':0});
        }
    });

    $('#l_btn_L').click(function(){
        index--;
        if(index<0){
            index =4;
            $('.oul').css({'left':-4850});
            }
        leftValue = index*(-970);
        console.log(index);
        $('.oul').css({'left':leftValue+'px'});
    });

    /**自动轮播**/
    var oul = document.querySelector('.oul');
    var allList = $(oul).children();
    var timer = setInterval(autoPlay,1000);
    function autoPlay() {
        index++;
        // 2.判断索引值
        if (index > allList.length-1){
            index = 1;
            // 让ul复位
            oul.style.left = 0;
        }
        // 3.运动
        linear(oul,20,-index*970);
    }

    $('.l_topRight').hover(function () {
        clearInterval(timer);
    },function () {
        timer = setInterval(autoPlay,1000);
    });




    /**内容区域**/
    $('.l_content li').hover(function () {
            $(this).children('img').hide().fadeIn();
            $(this).siblings().children('img').css('opacity', '0.8')
        }, function () {
            $(this).siblings().children('img').css('opacity', '1')
        });


    var navTop = $(".l_top").offset().top;
    $(window).on("scroll",function (){
        //001 获取滚动条距离窗口顶部的距离
        var scrollTopT = $(window).scrollTop();
        //002 判断临界值
        if(scrollTopT >navTop)
        {
            //$(".back_top").stop().fadeTo(200,0.8);
            $(".back_top").stop().fadeTo(200,0.8);
        }else
        {
            $(".back_top").stop().fadeTo(50,0);
        }
    });

    $(".back_top").click(function () {
        //003 给标签添加点击事件
        $("html body").animate({
            "scrollTop":0
        });
    })

})















    
