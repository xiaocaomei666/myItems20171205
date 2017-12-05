/**
 * Created by Administrator on 2017/9/4.
 */
$(function () {
    $("body").scrollTop(0)
    var timer = setInterval(autoPlay,2000);
    var i=0
    var flag=false;
    function autoPlay() {
        i++
        if(i>=5){
            i=1
            $(".dilicous").css("left",0)
        }
        if(i==4){
            $(".ols li").eq(0).addClass("color").siblings().removeClass("color")
        }else {
            $(".ols li").eq(i).addClass("color").siblings().removeClass("color")
        }
        $(".dilicous").animate({left:-$(".dilicous li").width()*i});
    }
    $(".first-pic").mouseenter(function () {
        clearInterval(timer);
        $(".first-pic span").fadeIn();
    })
    $(".first-pic").mouseleave(function () {
        timer = setInterval(autoPlay,2000);
        $(".first-pic span").fadeOut();
    })
    $(".tleft").click(function () {
        if(flag)return
        flag=true
        i++
        if(i>=5){
            i=1
            $(".dilicous").css("left",0)
        }
        if(i==4){
            $(".ols li").eq(0).addClass("color").siblings().removeClass("color")
        }else {
            $(".ols li").eq(i).addClass("color").siblings().removeClass("color")
        }
        $(".dilicous").animate({left:-$(".dilicous li").width()*i},function () {
            flag=false
        });
    })
    $(".tright").click(function () {
        if(flag)return
        flag=true
        i--
        console.log(i);
        if(i<0){
            i=3
            $(".dilicous").css("left",-$(".dilicous li").width()*(i+1))
        }
        if(i==4){
            $(".ols li").eq(0).addClass("color").siblings().removeClass("color")
        }else {
            $(".ols li").eq(i).addClass("color").siblings().removeClass("color")
        }
        $(".dilicous").animate({left:-$(".dilicous li").width()*i},function () {
            flag=false
        });
    })
    $(".ols li").click(function () {
        if(flag)return
        flag=true
        i=$(this).index()
        $(".ols li").eq(i).addClass("color").siblings().removeClass("color")
        $(".dilicous").css("left",-$(".dilicous li").width()*i)
        flag=false
    })
    var html1='<span class="first-word">前言</span>'+'<span class="second">|</span>'+'<span>一次旅行，一种心情，一个故事</span>'+ '<p>•出发时间2016/04/29天数5天，人均消费10000</p>'+ '<p>12年第一次去韩国，当时行捏经由首尔前往大阪，持有效曰本签证无需再办理韩国签证，所以此前都没有办韩签的经验•这次自己办理，最初看到签证所需材料时，旅行社都要求给到身份证原件，对于这点阿叱比较谨憤，就一直拖着没办。 也想过索性跟12年一样日本韩国一起玩•不过之后巧的是找到了一家旅行社，身份证可以当场取回，所以就^常麻利得确定了出行时间，并准备好了签证材料送签。</p>'+ '<p>行前准备【机票】</p>'+'<p>机票（北京直飞首尔金浦，南航）+酒店（明洞天空花园Ⅰ）6323元/两人----携程</p>'+'<p>行前准备【酒店】</p>'+ '<p>旅行中阿叱习悝住四五星级及以上的酒店，而不太考虑Akbnb这类民宿预订网站，预订习俄则是80%用Booking , 20%用酒店官网，这次同样订于Booking.酒店的选择原则是：</p>'+ '<p> a>酒店星级，五星>> 四星</p>'+ '<p>酒店地址，一定要在明洞附近，步行距商5分祌以内</p>'+ '<p>c)酒店设施，新> >旧（一般来说新造的星级酒店设施会比较好）住宿预算1.200RMB以内。</p>'+ '<p>行前准备【兑换韩币】</p>'+ '<p>明洞的换钱所汇率划算这点在很多攻略中都被提到。不过阿叱这次出行准备的韩币现金汉用于两人在首尔的交通费、餐费，差价在CNY300以内，所以阿叱是在工商银行兑换的共计工行的APP有结售汇功能，可以簠接购汇成功后先到临近网点预约取现时间及金额，然后带着你结隹汇所用张号的银行卡到网点取现，非常方便，不过工行只有五万面值的纸币，如果希望有小面额的，可能中国银行会有（当然中国银行汇率差是众所周知。</p>'+ '<h2>第1天2016-04-29</h2>'+ '<p>行程幵始啦~写在最前面！去不熟悉的城市旅游，如果对要去的地点完全没有地理概念的话阿叱会很焦虑。因此一到自由行，阿叱会把想去的景点以简图的横式标注出来，然后在出发前设计每天的大致路线，这样等到实际游玩W,即便临时检索地图软件音看路线也不会走太多冤枉路。</p>'+ '<h2>第2天2016-04-30</h2>'+ '<p>乐天免税店</p>'+ '<p>•幵放时间：09:30-21:00</p>'+ '<p>•电话：02-3484-9600</p>'+' <p>•地址：首尔特别市中区小公洞1,乐天百货店总店9~11F</p>'+ '<p>•简介：乐天免税店可以说是明洞的地标4</p>'+ '<p>吃得超满足之后去明洞的乐天百货和免税店逛逛消消食，可能恰逢工作日外加小黄金周尚未幵始，旅游的大部队还未到达，乐天里人流还可以，并不像好多游记里提到的那祥人山人海。小伙伴意思意思买了too coolfor schoo丨的BB霜和几支眼影笔后亶接地铁前往弘大令，乐天免税店位于乐天百货的9-10层，韩国品牌可以现场买完產接带走，国外品牌则需到机场提货，乐天百货旁还有一暢Avenuel,阿叱反倒更春欢这里，毕竟连GGDB这种牌子部有啊！而且能產接退税珍</p>'+ '<ul class="sAul">'+ '<li><img src="images/pshop1.jpg" alt=""></li>'+ '<li><img src="images/pshop2.jpg" alt=""></li>'+ '<li><img src="images/pshop3.jpg" alt=""></li>'+ '</ul>'
    $(".artical").html(html1);
    $(".one").click(function () {
        $(document).scrollTop($(".artical").offset().top);
        $(".artical").html(html1);
    })
    $(".two").click(function () {
        $(document).scrollTop($(".artical").offset().top);
        var html=
            '<h2>第3天2016-05-01</h2>'+ '<p>弘大</p>'+ '<p>•开放时间：9:00-21:00</p>'+ '<p>•itfetlh: Mapo-gu, Wausan-ro, 94 Seoul,Korea</p>'+ '<p>•简介：弘大购物区指的就是弘益大学前面的商业区，是首尔时尚年轻人最集中的地区之一。</p>'+ '<p> 从明洞的乐天百货到弘大，坐2号线（绿线），乙支路入口站7号口进，弘大入口站8号口出 弘大是首尔年轻人的聚策地，问起首尔的韩国朋友平时都去哪里逛街，回答也是一般都去弘大、新村、林荫路这三个地方，这次阿叱的五天行程里，弘大和林荫路都各去了两次，每次都是吃得满足又满载而归！如果你音欢时尚又物美价廉的好物可以多去去弘大；如果是爱逛大牌店的，那就查接往江南押明亭进发吧。</p>'+'<p>位于弘大的超人气美食店！口味独特的韩国料理！位于年轻人的天地——弘大地区的“Myth猪蹄”，于2012年4月开业，是一家以简约大方的咖啡厅风格为主的猪蹄专卖店。猪蹄富含有助于美容和延缓衰老的胶原蛋白，很受女性欢迎。该店的猪蹄和沙拉的搭配概念成为热点，不论是平日或休息日，店里都吸引着很多以20～30岁女性为主的顾客，热闹非凡。除了各色口味的猪蹄料理以外，该店的辣味米肠和大盘荞麦面也是做得极为精致，不可不尝。从地铁2号线或机场铁路A’REX弘大入口站步行2分钟即可到达该店。“Myth猪蹄”简约大方的氛围正好适合约会或闺蜜淘。如此美味的猪蹄怎能轻易错过呢！</p>'+ '<ul class="sAul">'+ '<li><img src="images/phd1.jpg" alt=""></li>'+ '<li><img src="images/phd2.jpg" alt=""></li>'+ '<li><img src="images/phd3.jpg" alt=""></li>'+ '</ul>'+ '<h2>第4天2016-05-02</h2>'+ '<p>401烤肉店(弘大店)5分/15箱游记中提到</p>'+'<br/>'+'<p>•类型：韩式料理</p>'+ '<p>•地址：弘大首尔市麻浦区西桥洞395-17(弘益大学}</p>'+ '<p>•电话：+82-2-325-8081</p>'+ '<p>•简介：RUNNINGMAN效应，韩国明星HAHA幵的一家烤肉店，以济州岛黑猪而闻名。</p>'+ '<ul class="Aul">'+ '<li><img src="images/pleft.png" alt=""></li>'+ '<li><img src="images/plt.png" alt=""></li>'+ '<li><img src="images/plb.png" alt=""></li>'+ '</ul>'
        $(".artical").html(html);
    })
    $(".center li").mouseenter(function () {
        $(this).css("opacity",1).siblings().css("opacity",0.6);
    })
    $(".center li").mouseleave(function () {
        $(".center li").css("opacity",1)
    })
    $(window).scroll(function () {
        if($(document).scrollTop()<=1000){
            $(".back_top").fadeOut()
        }else {
            $(".back_top").fadeIn()
        }
    })
    $(".back_top").click(function () {
        $(document).scrollTop(0);
    })
})