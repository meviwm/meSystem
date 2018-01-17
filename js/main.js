angular.module('ylmf', ['ngAnimate', 'ngSanitize', 'ui.router', 'oc.lazyLoad', 'ui.bootstrap', 'ngScrollbars', 'ui.select'])
//滚动条插件配置
    .config(function (ScrollBarsProvider) {
        ScrollBarsProvider.defaults = {
            scrollButtons: {
                scrollAmount: 'auto', // scroll amount when button pressed
                enable: false // 是否启用滚动按钮;上下的来年各个箭头
            },
            scrollInertia: 100, // 滚动速度
            autoDraggerLength: true,
            axis: 'y', // 垂直滚动条
            theme: 'dark',  //minimal、dark、minimal-dark
            autoHideScrollbar: true,    //自动隐藏滚动条
            autoExpandScrollbar: true,   //鼠标指向滚动条放大
            alwaysShowScrollbar: '1',
            scrollbarPosition: 'inside'  //滚动条相对于内容的位置
        };
    })
    //懒加载配置
    .config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            debug: true,
            event: false,
            modules: [
                //上传
                {
                    name: 'fileUpload',
                    files: ['lib/ng-file-upload/ng-file-upload-shim.js', 'lib/ng-file-upload/ng-file-upload.js']
                },
                //排序
                {
                    name: 'sortable',
                    files: ['lib/angular-sortable-view/angular-sortable-view.js']
                },
                //编辑器
                {
                    name:'uEdit',
                    files:['lib/ueditor/ueditor.config.js','lib/ueditor/ueditor.all.js','lib/angular-ueditor/angular-ueditor.js','lib/ueditor/lang/zh-cn/zh-cn.js']
                }
            ]
        });
    }])
    .run(function ($rootScope, $urlRouter) {
        //获取当前地址栏的url
        $rootScope.$on('$locationChangeSuccess', function (evt) {
            //console.log(window.location.href);
            $rootScope.ch = window.location.href;
        });

        $rootScope.returnPage = function () {
            console.log('000')
            window.history.go(-1);
        }
    })