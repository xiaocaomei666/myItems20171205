(function (angular) {

    //如果只有一个参数代表获得这个模块
    var app = angular.module("app");

    //创建控制器detailController
    app.controller('detailController',['$scope','$routeParams','detailBaseUrl','apiKey','wmxHttp',function ($scope,$routeParams,detailBaseUrl,apiKey,wmxHttp) {

        //疯狂加载(控制正在加载显示与否)
        $scope.isShowData = true;

        //参数
        var id = $routeParams.id;
        var url = detailBaseUrl + id;
        var params={
            apiKey:apiKey,
            start:0,
            count:5
        };


        //调用服务
        wmxHttp.jsonp(url,params,function (res) {
            //获取数据
            $scope.detailData = res;
            // console.log($scope.detailData);

            //获得数据后，使页面显示出来
            $scope.isShowData = false;

            //更新页面显示（脏值检测的原理）
            $scope.$apply();
        })
    }])


})(angular);
