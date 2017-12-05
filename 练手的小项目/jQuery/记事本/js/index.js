$(function () {


    /*************************************************/
    /*01 实现头部的吸顶操作*/
    /*************************************************/
    //000 获取nav标签距离窗口顶部的距离
    var navTop = $(".nav").offset().top;
    //001 先监听页面的滚动
    $(window).on("scroll",function () {
        //console.log("页面滚远了");

        //002 获取滚动条距离窗口顶部的距离
        var scrollTopT = $(window).scrollTop();

        //003 监听判断当前的距离是否超过临界值
        if(scrollTopT >navTop)
        {
            //设置吸顶效果
            //(1) 设置nav标签的样式
            $(".nav").css({
                "position":"fixed",
                "top":"0",
                "box-shadow":"0 1px 3px rgba(0,0,0,.3)"
            })
            //(2) 设置logo显示
            $(".nav img").css({
                "opacity":1
            })
        }else
        {
            //恢复
            //(1) 设置nav标签的样式
            $(".nav").css({
                "position":"absolute",
                "top":"100px",
                "box-shadow":"none"
            })

            //(2) 设置logo隐藏
            $(".nav img").css({
                "opacity":0
            })
        }
    })



    /*************************************************/
    /*02 实现返回顶部的操作*/
    /*************************************************/
    $(window).on("scroll",function (){
        //001 获取滚动条距离窗口顶部的距离
        var scrollTopT = $(window).scrollTop();
        //002 判断临界值
        if(scrollTopT >navTop)
        {
            $(".back_top").stop().fadeTo(200,1);
        }else
        {
            $(".back_top").stop().fadeTo(200,0);
        }
    })
    $(".back_top").click(function () {
        //003 给标签添加点击事件
        $("html body").animate({
            "scrollTop":0
        })
    })

    /*************************************************/
    /*03 实现添加数据的操作*/
    /*监听添加标签的点击事件,获取文本框中的内容,根据内容来生成标签添加到列表中*/
    /*当添加新数据的时候 :01 更新UI 02 把数据保存起来*/
    /*当DOM加载完毕的时候:01 先获取之前保存的数据 02 根据获取的数据来显示UI*/
    /*************************************************/
    function uploadUI() {

        //先清空之前已经创建好的数据列表
        $(".task").empty();
        $(".task_finish").empty();

        for(var i = 0;i<dataArray.length;i++)
        {
            var item = dataArray[i];
            //判断当前的元素是否是undefined
            if(item == undefined) continue;
            var oTemp =  '<li data-index='+i+'>'+
                // '<input type="checkbox" class="oSelector" '+item.isCheck?"checked":""+'>'+
                '<input class="oSelector" type="checkbox"'+(item.isCheck?"checked":"")+'>'+
                '<span class="oTitle">'+item.title+'</span>'+
                '<span class="oDel">删除</span>'+
                '<span class="oDetail">详情</span>'+
                '</li>';

            if(item.isCheck)
            {
                $(".task_finish").prepend($(oTemp));
            }else
            {
                $(".task").prepend($(oTemp));
            }

        }
    }

    //先获取之前保存的数据
    var dataArray = store.get('data') || [];
    //根据获取的数据来显示UI
    uploadUI()


    $(".oSubmit").click(function (event) {
        //阻止标签的默认行为
        event.preventDefault();

        //(1) 把数据保存起来
        var oTitleValue = $(".oText").val();

        var itemObj = {
            title:oTitleValue,
            isCheck:false,
            content:"默认的详情",
            timer:"2008-08-08"
        }

        dataArray.push(itemObj);
        store.set("data",dataArray);

        //(2) 更新UI
        uploadUI();
        $(".task li:first").hide().slideDown(1000);


        //(3) 清空文本框的内容
        $(".oText").val("");

    })

    //测试数据存储方案
    //存|取|清空
    //store.set("key","100");
    //console.log(store.get("key"));
    //store.clear();



    /*************************************************/
    /*04 实现删除数据的操作*/
    /*先获取删除标签,给该标签添加点击事件,点击的时候删除数据+更新UI*/
    /*************************************************/
    $(".content_body").on("click",".oDel",function () {
        //删除数据
        //(1) 先获取当前标签的父标签
        var node = $(this).parent();
        //(2) 获取父标签中data-index属性的值(数组中对应元素的索引)
        var index = node.data().index;

        //console.log(index);
        //(3) 删除本地存储数据中对应的那个元素
        //dataArray.splice(index);
        delete dataArray[index];
        store.set("data",dataArray);


        console.log(dataArray);
        //更新UI
        //uploadUI();
        node.slideUp(1000,function () {
            node.remove();
        });
    })



    /*************************************************/
    /*05 实现Tab切换*/
    /*给指定的标签添加点击事件,当点击的时候切换class,*/
    /*************************************************/
    $(".content_header li").click(function () {
        $(this).addClass("cur").siblings().removeClass("cur");
        //获取当前点击标签的角标
        var index = $(this).index();
        $(".content_body").eq(index).addClass("active").siblings().removeClass("active");
    })


    /*************************************************/
    /*06 标记已经完成的功能*/
    /*(1) 获取页面中数据列表里面的复选框*/
    /*(2) 给复选框添加点击事件*/
    /*(3) 获取操作之后复选框的选中状态(是否被选中)*/
    /*(4) 更新数据 重新更新页面*/

    /*************************************************/
    $(".content_body").on("click",".oSelector",function (){

        //(1) 更新数据
        //001 获取当前标签是否被选中
        var isCheck = $(this).is(":checked");

        //002 获取当前标签的父标签
        var node = $(this).parent();
        //003 获取父标签上面的属性节点值(对应数组中的索引)
        var index = node.data().index;

        //004 根据索引获取当前列表对应的数据
        var itemObj = dataArray[index];
        //console.log(itemObj);

        //005 更新数据
        itemObj.isCheck = isCheck;
        dataArray[index] = itemObj;

        //006 重新把数据保存(保证本地存储的数据是最新的)
        store.set("data",dataArray);

        //(2) 更新UI
        uploadUI();
    })


    /*************************************************/
    /*07 详情的点击事件处理*/
    /*(1) 获取页面中数据列表里面的详情标签*/
    /*(2) 给标签添加点击事件*/
    /*(3) 弹出蒙板*/

    /*************************************************/

    var current_index;
    $(".content_body").on("click",".oDetail",function (){
       $(".mask").fadeIn();

        //显示该条信息对应的数据
        //标题 | 详情 | 时间
        //001 获取当前标签的父标签
        var node = $(this).parent();
        //002 获取父标签上面的属性节点值(对应数组中的索引)
        var index = node.data().index;
        current_index = index;
        //003 根据索引获取当前列表对应的数据
        var itemObj = dataArray[index];
        console.log(itemObj);

        //004 设置显示标题
        $(".title").text(itemObj.title);

        //005 设置显示详情
        $("#textareaID").val(itemObj.content);

        //006 设置显示时间
        $("#inputID").val(itemObj.timer);

    })

    $(".mask").click(function () {
        //关闭蒙版
        $(this).fadeOut();
    })

    $(".close").click(function () {
        $(".mask").fadeOut();
    })

    $('.detail_content').click(function (e) {

        //阻止冒泡
        e.stopPropagation();
    })

    //更新按钮的点击事件
    $("#updateBtnID").click(function () {
        //001 设置让蒙版消失
        $(".mask").fadeOut();

        //002 更新数据
        //(1) 获取当前最新的详情和时间
        var content = $("#textareaID").val();
        var timer = $("#inputID").val();

        //(2) 把这些数据保存起来
        var itemObj = dataArray[current_index];
        console.log(itemObj);
        itemObj.content = content;
        itemObj.timer = timer;
        dataArray[current_index] = itemObj;

        //同步
        store.set("data",dataArray);
    })

    //日期插件的处理
    //$.datetimepicker.setLocale("ch");
    $.datetimepicker.setLocale("ch");
    $("#inputID").datetimepicker();


});