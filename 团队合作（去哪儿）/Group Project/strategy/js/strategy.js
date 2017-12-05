/**
 * Created by Administrator on 2017/9/3.
 */
$(function(){
    $("img").click(function () {
        location.href = "../detail/strategy-details.html"
    })
    /**01-�������**/
    /**001-������**/
    $('l_Text').suggestion({
        url:'http://suggestion.baidu.com/su',
        FieldName:'wd',
        jsonp:'cb',
        onCallback:function(item,data){
            var list = data['s'];
            item.empty();
            for(var i=0;i>list.length;i++){
                item.append('<li>'+list[i]+'</li>');
            }
        }
    });

    /**02-��������**/
    /**001-���Tabת��**/
    $('.l_topLeft>ul>li').hover(function(){
        $(this).children('.l_value').css('display','inline-block').hide().stop().fadeIn();
    },function(){
        $(this).children('.l_value').stop().fadeOut();
    });


    /**002-�ұ��ֲ�ͼ**/
    /**���Ұ�ť**/
    $('.l_topRight').mouseenter(function(){
        $('#l_btn_L,#l_btn_R').css('display','block')
    });
    $('.l_topRight').mouseleave(function(){
        $('#l_btn_L,#l_btn_R').css('display','none')
    });

    /**�����ֲ�ͼ**/
    var index=0;
    var leftValue=0;
    $('#l_btn_R').click(function(){
        index++;
        leftValue = index*(-970);
        console.log(index);
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


    /**�Զ��ֲ�**/
    var oul = document.querySelector('.oul');
    var allList = $(oul).children();
    var timer = setInterval(autoPlay,1000);
    function autoPlay() {
        index++;
        // 2.�ж�����ֵ
        if (index > allList.length-1){
            index = 1;
            // ��ul��λ
            oul.style.left = 0;
        }
        // 3.�˶�
        animate(oul,{left:-970},function(){});
    }

    $('.l_topRight').hover(function () {
        clearInterval(timer);
    },function () {
        timer = setInterval(autoPlay,500);
    })





    /**��������**/
    $('.l_content li').hover(function(){
        $(this).children('img').hide().fadeIn();
        $(this).siblings().children('img').css('opacity','0.8')
    },function(){
        $(this).siblings().children('img').css('opacity','1')
    })


    $('.l_content1 li').imagezoom({
        'hoverEffect':true,
        'hoverRatio':1.2
    });




    var navTop = $(".l_top").offset().top;
    $(window).on("scroll",function (){
        //001 ��ȡ���������봰�ڶ����ľ���
        var scrollTopT = $(window).scrollTop();
        //002 �ж��ٽ�ֵ
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
        //003 ����ǩ��ӵ���¼�
        $("html body").animate({
            "scrollTop":0
        });
    })
});