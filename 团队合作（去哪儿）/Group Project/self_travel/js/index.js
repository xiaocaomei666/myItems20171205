/**
 * Created by Recall on 2017/9/4.
 */
$(function(){


    //function keyWord(obj) {
    //    var oUl =  document.querySelector(".current") || document.createElement("ul");
    //    $(oUl).addClass("current");
    //
    //    $(".serch").append(oUl);
    //    oUl.innerHTML = "";
    //    var arr = obj["s"];
    //    for (var i = 0; i < arr.length; i++) {
    //        var oLi = document.createElement("li")
    //
    //        oLi.innerHTML = arr[i];
    //        oUl.appendChild(oLi)
    //    }
    //}
    //
    //
    //
    //$("input").keyup(function () {
    //    //console.log(1);
    //
    //    var inputStr = $("input").val();
    //    if(!inputStr){
    //        $(".current").remove();
    //        return;
    //    }
    //        $("#jsonP").remove();
    //    var oScript = document.createElement("script");
    //    oScript.setAttribute("src","https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+inputStr+"&sugmode=2&json=1&p=3&sid=22949_1454_24182_21127_20930&req=2&bs=abc&pbs=abc&csor=3&pwd=abc&cb=keyWord&_=1504346476007");
    //    oScript.setAttribute("id","jsonP")
    //    document.body.appendChild(oScript);
    //})



    $('.input-text').suggestion({
        url: 'http://suggestion.baidu.com/su',
        FieldName: 'wd',
        jsonp: 'cb',
        onCallback: function (item, data) {
            var list = data['s'];
            item.empty();
            for (var i = 0; i < list.length; i++) {
                item.append('<li>' + list[i] + '</li>');
            }
        }
    });




    $(".centre").mouseenter(function(){
        $("#centre_c2K").css({"display":"block"})
    })
    $(".centre").mouseleave(function(){
        $("#centre_c2K").css({"display":"none"})
    })
    //console.log(1);
    var Arr=[
        {  // 2
            zIndex:3
,
            width:600,
            top:70,
            left:280,
            opacity:0.8,
    },
    {   // 3
        zIndex:4,

        width:800,
        top:120,
        left:620,
        opacity:1,
    },
    {  // 4
        zIndex:3,

        width:600,
        top:70,
        left:920,
        opacity:0.8,
    },
        {   // 5
            zIndex:2,
            width:600,
            top:30,
            left:620,
            opacity:0.6,

        }
    ]
    $.each(Arr,function(index,obj){

        $("#slide").children().eq(index).css(obj);
    })
    var flag = false;
    $("#LS").click(function(){
    // ɾ����һ����ӵ����һ��  push()��ӵ����   shift() ɾ����һ��
    if(flag)return;
    flag = true;
    Arr.push(Arr.shift());
    $.each(Arr,function(index,obj){
        var zindexT = obj.zIndex
        $("#slide").children().eq(index).css({"zIndex":zindexT}).animate(obj,function(){
            flag = false
        });
    })

})

    $("#RS").click(function(){
        if(flag)return;
        flag = true;
        // ɾ�����һ����ӵ���һ��  unshift() ��ӵ���һ��   pop() ɾ�����һ��
        Arr.unshift(Arr.pop());

        $.each(Arr,function(index,obj){
            var zindexT = obj.zIndex;
            $("#slide").children().eq(index).css({"zIndex":zindexT}).animate(obj,function(){
                flag = false
            });
        })

    })

    $(".lis").mouseenter(function(){
        $(this).children().eq(1).css({"display":"block"})
    })
    $(".lis").mouseleave(function(){
        $(this).children().eq(1).css({"display":"none"})
    })

    $(".bottom1_C").mouseenter(function(){
        $("#bottom1_CK").css({"display":"block"})
    })
    $(".bottom1_C").mouseleave(function(){
        $("#bottom1_CK").css({"display":"none"})
    })

    var index = 0
    var isSlide = false;

    $(".bottom_Cspan1").click(function(){
        if(index<1){
            return
        }
        if(isSlide)return
        isSlide=true;
        console.log(index);

        index--;
        $(".uls").animate({"left": -($(".uls").children().eq(0).width()+16)*index},function(){
            isSlide=false;
        })
    })
    $(".bottom_Cspan2").click(function(){
        if(index>4){
            return
        }
        if(isSlide)return
        isSlide=true;

        console.log(index);

        index++;
        $(".uls").animate({"left":(-$(".uls").children().eq(0).width()-16)*index},function(){
            isSlide=false;
        })
       // $(".uls").animate({left : -295 * index })
    })

    //
    $(".bottom2_C").mouseenter(function(){
        $("#bottom2_CK").css({"display":"block"})
    })
    $(".bottom2_C").mouseleave(function(){
        $("#bottom2_CK").css({"display":"none"})
    })
    // $(".bottom2_C").hover(function(){
    //         $("#bottom2_CK").slideToggle()
    //     console.log(1);
    // })

    var index2 = 0
    var isSlide = false;
    $(".bottom_Cspan3").click(function(){
        if(index2<1){
            return
        }
        if(isSlide)return
        isSlide=true;

        index2--;
        $(".uls1").animate({"left": -($(".uls1").children().eq(0).width()+16)*index2},function(){
            isSlide=false;
        })
    })
    $(".bottom_Cspan4").click(function(){
        if(index2>4){
            return
        }
        if(isSlide)return
        isSlide=true;


        index2++;
        $(".uls1").animate({"left":(-$(".uls1").children().eq(0).width()-16)*index2},function(){
            isSlide=false;
        })
        // $(".uls").animate({left : -295 * index })
    })


    $(".bottom3_C").mouseenter(function(){
        $("#bottom3_CK").css({"display":"block"})
    })
    $(".bottom3_C").mouseleave(function(){
        $("#bottom3_CK").css({"display":"none"})
    })


    var index3 = 0
    var isSlide = false;
    $(".bottom_Cspan5").click(function(){
        if(index3<1){
            return
        }
        if(isSlide)return
        isSlide=true;

        index3--;
        $(".uls2").animate({"left": -($(".uls2").children().eq(0).width()+16)*index3},function(){
            isSlide=false;
        })
    })
    $(".bottom_Cspan6").click(function(){
        if(index3>4){
            return
        }
        if(isSlide)return
        isSlide=true;


        index3++;
        $(".uls2").animate({"left":(-$(".uls2").children().eq(0).width()-16)*index3},function(){
            isSlide=false;
        })
        // $(".uls").animate({left : -295 * index })
    })

    var navTop = $(".centre").offset().top;

    $(window).on("scroll",function (){
        //001 ��ȡ���������봰�ڶ����ľ���
        var scrollTopT = $(window).scrollTop();
        //002 �ж��ٽ�ֵ
        if(scrollTopT >navTop)
        {
            $(".back_top").stop().fadeTo(200,1);
        }else
        {
            $(".back_top").stop().fadeTo(200,0);
        }
    })
    $(".back_top").click(function () {
        //003 ����ǩ��ӵ���¼�
        $("html body").animate({
            "scrollTop":0
        })
    })


    var leftX = 0;
    var leftY = $(".uls4").children().eq(0).width() + 90
    var timer;
    function autoPlay() {
        timer = setInterval(function () {
            leftX += 3;
            // if(leftX >=leftY*6+90)
            // {
            //     leftX = 0;
            // }
            // $(".uls4").css("left",-leftX);
            if(leftX >= leftY*8){
                $(".uls4").css({left:0});
                leftX = 0
            }
            $(".uls4").css({left:-leftX})
        },20    )
            // $(".uls4").animate({left:-leftX,)

    }
    autoPlay();


    $(".lis1").hover(function () {
        clearInterval(timer);
        $(this).fadeTo(30,1).siblings().fadeTo(30,0.5);
    },function () {
        autoPlay();
        $(".lis1").fadeTo(30,1);
    })

    // $(".lis2").hover(function(){
    //     $(this).stop().animate({width: 580,left:150})
    // },function(){
    //     $(this).stop().animate({width: 281,left:0})
    //
    //
    // })
})