(function (angular) {
    //记得导入模块的依赖
    var app = angular.module('app',['ngRoute']);

    //注入一个$routeParams服务
    //注入服务baseUrl,注意写在$http的前面
    //注入服务apiKey
    //注入自定义服务wmxHttp
    app.controller('musicController',['$scope','$routeParams','baseUrl','apiKey','wmxHttp',function ($scope,$routeParams,baseUrl,apiKey,wmxHttp) {
        //标题
        $scope.Title = '小草莓豆瓣';

        //疯狂加载(控制正在加载显示与否)
        $scope.isShow = true;

        //通过服务器获得type值和id值
        var type = $routeParams.type;

       //确定对应服务器的地址
       //  var url = baseUrl + type + "?apiKey=" +apiKey;
        var url = baseUrl + type;
        var params = {
            apiKey:apiKey,
            //默认每次加载20条数据,修改每次加载条数
            start:0,
            count:4
        };

        //下面的代码没有错误,跨域也没有错误,豆瓣服务器接受callback时,名称不能出现小数点,所以没有办法是用angular内置的跨域方法.所以只能自定义jsonp,也就是自定义一个服务
        //angular1.6.js:12496 GET https://api.douban.com/v2/movie/undefined?callback=angular.callbacks._0 net::ERR_ABORTED
    //     $http({
    //         url:url,
    //         method:'jsonp'
    //     }).then(function (res) {
    //         $scope.data = res.data;
    //         alert($scope.data);
    //         console.log($scope.data);
    //     }).error(function (err) {
    //     })

        //自定义服务wmxHttp
        /**
         * url 请求的地址
         * params 请求的参数
         * fn 回调函数
         */
        wmxHttp.jsonp(url,params,function (res) {
            //获取到数据
            $scope.movieData = res;
            //获得数据后，使页面显示出来
            $scope.isShow = false;

            //更新页面显示（脏值检测的原理）
            $scope.$apply();
        })


    }]);
})(angular);
