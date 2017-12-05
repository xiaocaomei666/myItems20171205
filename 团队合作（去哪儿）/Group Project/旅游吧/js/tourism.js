$(function () {
//    实现详情功能
    $(".slideDown").hover(function () {
        $(this).children().stop().fadeToggle()
    })
    $("#des_on").click(function () {
        $("#des_more").toggle(150);
        if ($(this).html() == '详情 &gt;') {
            $(this).html("隐藏 ");
        } else {
            $(this).html("详情 &gt;");
        }

    });

//    实现搜索框的功能
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

//   选择城市
    $('.start_city').citys({
        required: false,
        nodata: 'disabled',
        onChange: function (data) {
            var text = data['direct'] ? '(直辖市)' : '';
            $('#place').text('当前选中地区：' + data['province'] + text + ' ' + data['city'] + ' ' + data['area']);
        }
    });

//    选择时间
    $.datetimepicker.setLocale("ch");
    $(".input_time").datetimepicker();

//    获取手机验证码
    var timer = 0;
    var flag = false;
    $("#reg_num").click(function (e) {
        e.preventDefault();
        if (flag) return;
        flag = true;
        e.preventDefault();
        var times = 11;
        timer = setInterval(function () {
            times--;
            if (times < 1) {
                $("#reg_num").html("点击重新获取验证码");
                clearInterval(timer);
                flag = false;
                return;
            }
            $("#reg_num").html(times + "秒后重新获取")
        }, 1000)


//  tab选项卡
//     $(".oul>li").mouseenter(function () {
//         console.log('进入');
//     });
    });

//    tab选项卡
    $(".oul>li").mouseenter(function () {
        $(this).addClass("current").siblings().removeClass("current");
        var index = $(this).index();
        $(".des>div").eq(index).stop().fadeIn(500).siblings().hide();
        if(index == 0){
            $(".Ool").hide().fadeIn();
        }else {
            $(".Ool").hide();
        }
    });

//    翻页序号123
    $(".Ool>li").click(function () {
        var index = $(this).index();
        console.log(index);
        $(".ul_des>li").eq(index).slideDown().siblings().slideUp();
    });

//    百度地图
    function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
    }
     //创建地图函数：
    function createMap(){
        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
        var point = new BMap.Point(102.711173,25.041879);//定义一个中心点坐标
        map.centerAndZoom(point,12);//设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map;//将map变量存储在全局
    }
     //地图事件设置函数：
    function setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
    }
     //地图控件添加函数：
    function addMapControl(){
        //向地图中添加缩放控件
        var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
        map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
        var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
        map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
        var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
        map.addControl(ctrl_sca);
    }
    initMap();//创建和初始化地图

//    轮播图
    var pic_ul = document.querySelector(".pic_ul");
    var timers;
    var count = -1;
    var nn =-1;
    timers = setInterval(autoplay,1000);
    function autoplay() {
        count++;
        nn++;
        if(nn>2){
            nn =0;
        }
        if(count>3){
            count = 1;
            pic_ul.style.left = 0;
        }
        linear(pic_ul,12,-count*500);
        $(".uul").children().eq(nn).addClass("scale_pic").siblings().removeClass("scale_pic");
    }

    pic_ul.onmouseover = function () {
        clearInterval(timers);
    };
    pic_ul.onmouseout = function () {
        timers = setInterval(autoplay,1000);
    };

//    鼠标移入移出事件
    $(".uul>li").hover(function () {
        clearInterval(timers);
        nn = $(this).index()
        count = nn
        $(this).css({"opacity":1}).siblings().css({"opacity":0.5});
        $(pic_ul).stop().animate({left:-500*$(this).index()});
        $(this).addClass("scale_pic").siblings().removeClass("scale_pic");
        // console.log(1);
    },function () {
        $(".uul>li").css({"opacity":1});
        // $(this).removeClass("scale_pic")
        timers = setInterval(autoplay,1000);
    });

//    排忧解难
    $(".luck_ul>li").each(function (index, oLi) {
        var imgPath = "images/x-" + (index+1) + ".png";
        $(this).children("img").attr("src",imgPath);
    });
    var flags = false;
    $("#btn_luck").click(function () {
        if(flags){
            return;
        }
        flags = true;
        var count = Math.floor(Math.random()*9) + 9;
        var currentCount = 0;
        var timerss = setInterval(function () {
            count--;
            if(count == 0){
                clearInterval(timerss);
                flags = false;
                $(".mask_div").hide().fadeIn(200).children(".mask_ul").hide().fadeIn(200).children("li").eq(currentCount).hide().fadeIn(200).siblings().fadeOut(200);
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
        },150)
    });

//    回到顶部
    $(function() {
        $("#service a").hover(function() {
            if ($(this).prop("className") == "weixin_area") {
                $(this).children("img.hides").show();
            } else {
                $(this).children("div.hides").show();
                $(this).children("img.shows").hide();
                $(this).children("div.hides").animate({marginRight: '0px'}, '0');
            }
        }, function() {
            if ($(this).prop("className") == "weixin_area") {
                $(this).children("img.hides").hide();
            } else {
                $(this).children("div.hides").animate({marginRight: '-163px'}, 0, function() {
                    $(this).hide();
                    $(this).next("img.shows").show();
                });
            }
        });
        $("#top_btn").click(function() {
            $("html,body").animate({scrollTop: 0}, 600);
        });
        //右侧导航 - 二维码
        $(".weixin_area").hover(function() {
            $(this).children(".weixin").show();
        },function(){
            $(this).children(".weixin").hide();
        })
    });


//    游客点评
    $(function() {
        //定义三维数组
        var data = [
            [
                ['很差', '导游？不存在的，自己玩。'],
                ['一般', '这导游有待提高啊'],
                ['好', '导游还行，还过得去'],
                ['很好', '导游不错，继续加油'],
                ['非常好', '这么好的导游可以来一打']
            ],
            [
                ['很差', '这家有服务吗！？'],
                ['一般', '态度较差，不能解决问题'],
                ['好', '客服反应慢，附加服务较少'],
                ['很好', '不错，附加服务多多,客服热情'],
                ['非常好', '附加服务全面，需要的都有']
            ],
            [
                ['很差', '以后不会再来了,旅行一般'],
                ['一般', '价格没优势,还行'],
                ['好', '特价时能看看,经常去的那里了'],
                ['很好', '相当不错,目前买同类产品最好的一家了'],
                ['非常好', '货品全，折扣大，不砍单']
            ]
        ];
        //定义悬浮每行各个星星图片
        var stars = [
            ['star_hover.png', 'star_gray.png', 'star_gray.png', 'star_gray.png', 'star_gray.png'],
            ['star_hover.png', 'star_hover.png', 'star_gray.png', 'star_gray.png', 'star_gray.png'],
            ['star_gold.png', 'star_gold.png', 'star_gold.png', 'star_gray.png', 'star_gray.png'],
            ['star_gold.png', 'star_gold.png', 'star_gold.png', 'star_gold.png', 'star_gray.png'],
            ['star_gold.png', 'star_gold.png', 'star_gold.png', 'star_gold.png', 'star_gold.png'],
        ];
        $(".stars").find("img").hover(function() { //星星悬浮触发
            var obj = $(this);//当前对象
            var star_area = obj.parent(".stars"); //当前父级.stars
            var star_area_index = star_area.parent().find(".stars").index(star_area);//当前父级.stars索引
            var index = star_area.find("img").index(obj);//当前星星索引
            var left = obj.position().left;
            var top = obj.position().top + 25;
            var comment_title = data[star_area_index][index][0];//标题
            var comment_description = data[star_area_index][index][1];//描述
            $("#tip").css({"left": left, "top": top}).show().html(comment_title);//显示定位提示信息
            for (var i = 0; i < 5; i++) {
                star_area.find("img").eq(i).attr("src", "images/" + stars[index][i]);//切换每个星星
            }
            star_area.find(".comment_description").remove();//星星右侧切换描述
            star_area.append("<span class='comment_description'><span class='comment_title'>" + comment_title + "</span><span class='intro'>" + comment_description + "</span></span>");
        }, function() { //鼠标离开星星
            $("#tip").hide();//隐藏提示
            var obj = $(this);//当前对象
            var star_area = obj.parent(".stars");//当前父级.stars
            var star_area_index = star_area.parent().find(".stars").index(star_area);//当前父级.stars索引
            var index = star_area.attr("data-default-index");//点击后的索引
            if (index >= 0) { //若该行点击后的索引大于等于0，说明该行星星已被点击
                var comment_title = data[star_area_index][index][0];//标题
                var comment_description = data[star_area_index][index][1];//描述
                star_area.find(".comment_description").remove();//显示切换描述
                star_area.append("<span class='comment_description'><span class='comment_title'>" + comment_title + "</span><span class='intro'>" + comment_description + "</span></span>");
                for (var i = 0; i < 5; i++) {
                    star_area.find("img").eq(i).attr("src", "images/" + stars[index][i]);//更新该行星星
                }
            } else {
                var obj = $(this);
                var star_area = obj.parent(".stars");
                star_area.find(".comment_description").remove();
                for (var i = 0; i < 5; i++) {
                    star_area.find("img").eq(i).attr("src", "images/star_gray.png");//更新该行星星都变初始状态
                }
            }
        });
        $(".stars").find("img").click(function() {
            //当点击每颗星星
            // flags = true;
            // $(".stars").attr("flags",true);
            console.log($(this));
            $(this).parent().attr("flags",true);
            // console.log($(".stars").attr("flags"));
            var obj = $(this);//当前对象
            var star_area = obj.parent(".stars"); //当前父级.stars
            var star_area_index = star_area.parent().find(".stars").index(star_area);//当前父级.stars索引
            var index = obj.parent(".stars").find("img").index($(this));//当前星星索引
            var comment_title = data[star_area_index][index][0];//标题
            var comment_description = data[star_area_index][index][1];//描述
            star_area.attr("data-default-index", index);//记录点击后的索引，用来鼠标移出星星后，获取之前点击后的星星索引
            star_area.find(".comment_description").remove();//显示切换描述
            star_area.append("<span class='comment_description'><span class='comment_title'>" + comment_title + "</span><span class='intro'>" + comment_description + "</span></span>");
        })
    });
    // console.log($(".stars").attr("flags"));
    // console.log($(".stars"));

    $(".comment_btn").click(function () {
        // console.log($(".stars").eq(0));
        // console.log($(".stars").eq(0).attr("flags"));
        if($(".stars").eq(0).attr("flags") && $(".stars").eq(1).attr("flags") && $(".stars").eq(2).attr("flags")){
            alert("感谢您的评价，祝您旅行平安！")
        }else {
            alert("亲，还没评价！")
        }

    })

});





