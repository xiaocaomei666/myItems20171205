(function (angular) {
    //如果只有一个参数代表获得这个模块
    var app = angular.module('app');

    // 配置路由信息
    app.config(['$routeProvider',function ($routeProvider) {
        $routeProvider.when('/movie/:type',{
            templateUrl:'movie_msg.html',
            controller:"musicController"
        }).when('/detail/:id',{
            templateUrl:'movie_detail_tpl.html',
            controller:'detailController'
        }).otherwise({
            redirectTo:"/movie/in_theaters"
        })
    }]);

    //使用angular的方法访问网络（解决跨域的问题）
    //1.6版本需要配置白名单($sceDelegateProvider)
    // app.config(['$sceDelegateProvider',function ($sceDelegateProvider) {
    //     $sceDelegateProvider.resourceUrlWhitelist([
    //         'self',
    //         'https://api.douban.com/**'
    //     ])
    // }])


})(angular);