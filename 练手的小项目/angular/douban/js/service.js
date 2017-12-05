(function (angular) {

    var app = angular.module('app');

    //将前面固定不变的地址设置为常量
    app.value('baseUrl','https://api.douban.com/v2/movie/');
    app.value('detailBaseUrl','https://api.douban.com/v2/movie/subject/');

    //将api 的key值定义为一个常量(在这里没有用到，暂时不注入)
    app.value('apiKey','0b2bdeda43b5688921839c8ecb20399b');

    // 方法：给服务器返回的数据调用（不能出现点；方法随机）
      //注入$window服务
    app.service('wmxHttp',['$window',function ($window) {
        /**
         * 跨域请求数据
         * @param url 请求地址
         * @param params  请求参数
         * @param fn 请求成功的回调
         */
        this.jsonp = function (url, params, fn) {
            /**
             * 跨域的步骤
             * 1. 在本地创建一个函数并随机生成函数名
             * 2. 通过src属性请求网络，把本地的函数名传递过去
             * @type {string}
             */
            // 1.回调函数的名字（随机生成，且不能还有小数点）
            var callBackName = 'wmx_callback'+ Math.random().toString().slice(2);

            // 2.通过$window创建一个callback的函数
            $window[callBackName] = function (args) {
                fn(args);
                // 获得数据后,动态创建的script标签没有存在的必要,可以移除
                $window.document.body.removeChild(newScript);
            };

            // 3.动态的创建一个script节点
            var newScript = $window.document.createElement('script');

            // 4.往script标签插入src
               // 01.参数的拼接
              var res = '';
              for(var key in params){
                res += key + '=' + params[key] + '&';
              }

                // 02.完整地址的拼接（src属性请求网络的值）
                res = url + '?' + res + 'callback=' + callBackName;

                // 03.给src赋值
                newScript.src = res;

            // 5.插入到dom节点下
            $window.document.body.appendChild(newScript);
        }
    }])
})(angular);
