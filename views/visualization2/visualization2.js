angular.module('ylmf.visualization', [])
    .controller("visualizationCtrl2", function ($scope, $timeout) {
        var scrollTopHe = 0;
        $scope.scrollbarsConfig = {
            // setWidth:'100%',  //设置内容的宽度（覆盖CSS宽度），以像素（整数）或百分比（字符串）为单位的值。
            // setHeight:'100%',       //设置内容的高度（覆盖CSS高度），以像素为单位的值（整数）或百分比（字符串）。
            // setTop:'0',   //设置内容的初始css top属性，接受字符串值（css top position）。 示例：setTop：“-100px”。
            // setLeft:'0',    //设置内容的初始css left属性，接受字符串值（css left position）。 示例：setLeft：“-100px”。
            axis: 'y',   //定义内容的滚动轴（添加到元素的滚动条的类型：垂直和/水平）。
            scrollbarPosition: 'inside',     //设置滚动条相对于内容的位置。 可用值：“inside”，“outside”。
            scrollInertia: 500,     //将滚动动量设置为动画持续时间（以毫秒为单位）
            autoDraggerLength: true,     //启用或禁用相对于滚动量自动调整滚动条拖动器长度（与浏览器的本机滚动条相同的bahavior）。
            autoHideScrollbar: true,     //启用或禁用在不活动时自动隐藏滚动条。
            autoExpandScrollbar: false,     //在光标停止或拖动滚动条时启用或禁用自动展开滚动条。

            // alwaysShowScrollbar:0,      //始终保持滚动条（s）可见，即使没有什么可滚动。
            // snapAmount:'',  //使滚动捕捉到固定数量的像素的倍数。

            // snapOffset:'0px',   //设置snapAmount选项的偏移量（以像素为单位）。

            // mouseWheel:false,   //通过鼠标滚轮启用或禁用内容滚动。

            theme: 'minimal-dark',
            advanced: {
                updateOnContentResize: true,
                updateOnSelectorChange: true//".userDefinedColumn,#phoneBody"
            },
            // setHeight: 200,
            // scrollInertia: 0,
            // autoExpandScrollbar: false,
            callbacks: {
                onInit: function () {
                    // console.log('000')
                    setArrow();
                },
                whileScrolling: function () {
                    scrollTopHe = this.mcs.top;
                    setArrow();
                },
                onUpdate: function () {
                    setArrow();
                },
                //内容变得足够小，且垂直滚动条被删除时调用
                onOverflowYNone: function () {
                    scrollTopHe = 0;
                    // updateArrowPosition();
                }
            }
        };

        //当前选中编辑的栏目
        //使用angularjs的方法添加删除class，在读取当前有添加的class的时候始终读取的是前一个元素
        //如果通过ID来获取，问题就得到解决
        $scope.currentColumn = -1;
        $scope.editCurrentColumn = function (a, SSrc) {
            if ($scope.currentColumn != a) {
                $scope.currentColumn = a;
                //如果没有$timeout，可能会在页面还没进来就去获取距离顶部的距离，这样会报错
                $timeout(function () {
                    $("#arrow").css('top', $("#c" + a).position().top + scrollTopHe + 58 + $("#c" + a).height() / 3);
                    $scope.settingColumnStyleViewSrc = SSrc;
                });
            }
        };

        //设置include的路径
        $scope.settingColumnStyleViewSrc = 'views/visualization2/editTmp/detail/details.html';
        $scope.editContentView = '';
        function setIncludeSrc() {

        }

        //箭头定位
        function setArrow() {
            $("#arrow").css('top', $("#c" + $scope.currentColumn).position().top + scrollTopHe + 58 + $("#c" + $scope.currentColumn).height() / 3);
        }

        //添加的栏目
        $scope.addColumnList = [
            /*{
             cid:'',    //对应数组下标，在id中有使用，删除栏目时通过这个来删除栏目
             conTmpSrc:'',  //栏目对应的界面路径
             editTmpSrc:''  //编辑栏目是对应的页面路径
             }*/
        ];
        $scope.addColumn = function (cs, es) {
            var addColumnCon = {
                cid: $scope.addColumnList.length,
                conTmpSrc: 'views/visualization2/conTmp/' + cs,
                editTmpSrc: 'views/visualization2/editTmp/' + es
            };
            $scope.addColumnList.push(addColumnCon);
            $timeout(function () {
                $scope.editCurrentColumn($scope.addColumnList.length - 1);
            });
            //更新滚动条
            $("#phoneBody").mCustomScrollbar("update");
        };


        //删除添加的栏目
        $scope.deleteColumn = function (cid) {
            //判断删除的是否是选中的，如果是，则让选中的变为默认-1
            if ($("#c" + cid).hasClass('activeColumn')) {
                $scope.currentColumn = -1;
                $scope.settingColumnStyleViewSrc = 'views/visualization2/editTmp/detail/details.html';
                $scope.editContentView = '';
                // $("#arrow").css('top', $("#c-1").position().top + scrollTopHe + 58 + $("#c-1").height() / 3);
            }
            //删除
            for (var i = 0; i < $scope.addColumnList.length; i++) {
                if ($scope.addColumnList[i].cid == cid) {
                    $scope.addColumnList.splice(i, 1);
                    break;
                }
            }
            //更新滚动条
            $("#phoneBody").mCustomScrollbar("update");

        };

        //更改栏目对应的样式设置模板
        $scope.loadedTmp = function (es) {
            $timeout(function () {
                // $scope.$apply(function(){
                $scope.settingColumnStyleViewSrc = es;
            });
        };


        /*===== ===== 商品 ===== ===== ===============================================*/
        //排列方式
        $scope.makeup = false;

        //显示内容
        $scope.buyBtn = true;
        $scope.godName = true;
        $scope.godPrice = true;

        //统一调用方法设置view
        $scope.setStyle = function (k, v) {
            $scope[k] = v;
        };

        $scope.showEditConViews = function (views) {
            console.log('0000');
            $timeout(function () {
                $scope.editContentView = 'views/visualization2/editTmp/' + views;
            })
        };


    });