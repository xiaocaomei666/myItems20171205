$(function () {

    //监听屏幕的变化
    $(window).on('resize',function () {
        //获取屏幕的宽度
        var windowW = $(window).width();
        //对小图的尺寸进行定义
        var isSmImg = windowW < 720;

        //轮播图在大屏和小屏时的变化
        bannerChange();
        function bannerChange() {
            //获取所有图片的容器
            var $items = $('#wjs_banner .item');

            //通过遍历获取每个item
            $items.each(function (index, value) {
                //将原生的js对象转换为jQ对象，方便data方法的操作
                $item = $(value);
                //将图片路径进行赋值
                var imgUrl = isSmImg ? $item.data('sm-img') : $item.data('lg-img');
                // //获取背景图片路径
                // var src = 'url("'+ imgUrl +'")';
                // //设置背景图片
                // $item.css({
                //     backgroundImage:src
                // });
                if (isSmImg){
                    //小图
                    //清空item中的节点
                    $item.empty();
                    //创建img标签
                    var img = $('<img src="' +imgUrl+'" >');
                    //添加在item上
                    $item.prepend(img);
                }else {
                    //大图
                    //清空item中的节点
                    $item.empty();
                    //获取背景图片路径
                    var src = 'url("'+ imgUrl +'")';
                    //设置背景图片
                    $item.css({
                        backgroundImage:src
                    });
                }
            })
        }
        
        //标签页的变化
        tagChange();
        function tagChange() {
            //拿到ul标签对象
            var $ul =  $(".wjs-tags ul");
            //拿到满足条件的li标签对象
            var $lis = $('li[role="presentation"]',$ul);
            var tabWidth = 0;
            //求出选项卡的宽度
            console.log($lis.width());
            //遍历li标签
            $lis.each(function (index, value) {
                //value作为jq对象
                var $li = $(value);
                //累加
                tabWidth += $li.width();
            });
            //求出父亲div的宽度
            var parentW = $ul.parent().width();
            //小屏时固定宽度
            if (tabWidth > parentW){
                $ul.css({
                    width:tabWidth + 'px'
                })
            }else {
                //大屏的时候，恢复默认样式。移除样式
                $ul.removeAttr('style');
            }


        }

        //提示框
        $('[data-toggle="tooltip"]').tooltip()

    });
    //自动调用函数
    $(window).trigger('resize');

});