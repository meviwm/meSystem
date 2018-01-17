angular.module('ylmf.visualization', [])
//过滤掉undefined数据
    .filter('hasUn', function () {
        return function (arr) {
            var list = [];
            for (var i = 0; i < arr.length; i++) {
                if (arr[i]) {
                    list.push(arr[i]);
                }
            }
            return list;
        }
    })
    .controller("visualizationCtrl3", function ($scope, $timeout) {
        var scrollTopHe = 0;

        //滚动条配置
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
                },
                //滚动时触发
                whileScrolling: function () {
                    //滚动的高度
                    // console.log(this.mcs.top);
                    scrollTopHe = this.mcs.top;
                    //内容垂直滚动百分比
                    // console.log(this.mcs.topPct);
                    updateArrowPosition();
                },
                //更新滚动条时调用的函数。
                onUpdate: function () {
                    updateArrowPosition();
                },
                //当滚动事件完成时触发
                onScroll: function () {
                },
                //当内容一直滚动到顶部或左侧时触发
                onTotalScrollBack: function () {
                },
                //内容变得足够小，且垂直滚动条被删除时调用
                onOverflowYNone: function () {
                    scrollTopHe = 0;
                },
                //内容变得足够长，且垂直滚动条被添加时调用
                onOverflowY: function () {

                }
            }
        };

        //更新滚动条
        function updateScroll() {
            $("#phoneBody").mCustomScrollbar("update");
        }

        //更新箭头位置
        function updateArrowPosition() {
            $("#arrow").css('top', $("#" + $scope.currentColumnName + $scope.currentColumn).position().top + scrollTopHe + 58 + $("#" + $scope.currentColumnName + $scope.currentColumn).height() / 3);
        }

        //所有栏目数据
        $scope.columns = [
            /*{
             columnTit:'',
             columnName:"goodsList",      //模块名称
             mobile: {
             frontEndInterfaceSrc: "",        //前端页面模板路径
             backstageViewsSrc: "",        //后台编辑页面路径
             contentEditViewSrc: "",      //后台内容编辑界面路径
             columnStyle:[       //默认样式

             ]
             },
             PC: {
             frontEndInterfaceSrc: "",        //前端页面模板路径
             backstageViewsSrc: "",        //后台编辑页面路径
             contentEditViewSrc: "",      //后台内容编辑界面路径
             columnStyle:[

             ]
             },
             content:[         //模块内容

             ]
             },*/
            //商品
            {
                columnTit: "商品",
                columnName: "goodsList",
                mobile: {
                    frontEndInterfaceSrc: "views/visualization3/columns/goodsList/FEIView.html",
                    backstageViewsSrc: "views/visualization3/columns/goodsList/BSView.html",
                    contentEditViewSrc: "views/visualization3/columns/goodsList/ECView.html",
                    columnStyle: []
                },
                PC: {
                    frontEndInterfaceSrc: "",        //前端页面模板路径
                    backstageViewsSrc: "",        //后台编辑页面路径
                    contentEditViewSrc: "",      //后台内容编辑界面路径
                    columnStyle: []
                },
                content: [         //模块内容

                ]
            },
            //商品列表
            {
                columnTit: "商品列表",
                columnName: "productList",
                mobile: {
                    frontEndInterfaceSrc: "views/visualization3/columns/productList/FEIView.html",
                    backstageViewsSrc: "views/visualization3/columns/productList/BSView.html",
                    contentEditViewSrc: "views/visualization3/columns/productList/ECView.html",
                    columnStyle: []
                },
                PC: {
                    frontEndInterfaceSrc: "",        //前端页面模板路径
                    backstageViewsSrc: "",        //后台编辑页面路径
                    contentEditViewSrc: "",      //后台内容编辑界面路径
                    columnStyle: []
                },
                content: [         //模块内容

                ]
            },
            //商品详情
            {
                columnTit: "商品详情",
                columnName: "goodsDetail",
                mobile: {
                    frontEndInterfaceSrc: "views/visualization3/columns/goodsDetail/FEIView.html",
                    backstageViewsSrc: "views/visualization3/columns/goodsDetail/details.html",
                    contentEditViewSrc: "views/visualization3/columns/",
                    columnStyle: []
                },
                PC: {
                    frontEndInterfaceSrc: "",        //前端页面模板路径
                    backstageViewsSrc: "",        //后台编辑页面路径
                    contentEditViewSrc: "",      //后台内容编辑界面路径
                    columnStyle: []
                },
                content: [         //模块内容

                ]
            },
            //图片广告
            {
                columnTit: "图片广告",
                columnName: "imgAdvert",
                mobile: {
                    frontEndInterfaceSrc: "views/visualization3/columns/imgAdvert/FEIView.html",
                    backstageViewsSrc: "views/visualization3/columns/imgAdvert/BSView.html",
                    contentEditViewSrc: "views/visualization3/columns/imgAdvert/ECView.html",
                    columnStyle: []
                },
                PC: {
                    frontEndInterfaceSrc: "",        //前端页面模板路径
                    backstageViewsSrc: "",        //后台编辑页面路径
                    contentEditViewSrc: "",      //后台内容编辑界面路径
                    columnStyle: []
                },
                content: [         //模块内容

                ]
            },
            //富文本
            {
                columnTit: "富文本",
                columnName: "richText",
                mobile: {
                    frontEndInterfaceSrc: "views/visualization3/columns/richText/",
                    backstageViewsSrc: "views/visualization3/columns/richText/",
                    contentEditViewSrc: "views/visualization3/columns/richText/",
                    columnStyle: []
                },
                PC: {
                    frontEndInterfaceSrc: "",
                    backstageViewsSrc: "",
                    contentEditViewSrc: "",
                    columnStyle: []
                },
                content: []
            },
            //标题
            {
                columnTit: "标题",
                columnName: "title",
                mobile: {
                    frontEndInterfaceSrc: "views/visualization3/columns/title/",
                    backstageViewsSrc: "views/visualization3/columns/title/",
                    contentEditViewSrc: "views/visualization3/columns/title/",
                    columnStyle: []
                },
                PC: {
                    frontEndInterfaceSrc: "",
                    backstageViewsSrc: "",
                    contentEditViewSrc: "",
                    columnStyle: []
                },
                content: []
            },
            //文本导航
            {
                columnTit: "文本导航",
                columnName: "textNav",
                mobile: {
                    frontEndInterfaceSrc: "views/visualization3/columns/textNav/",
                    backstageViewsSrc: "views/visualization3/columns/textNav/",
                    contentEditViewSrc: "views/visualization3/columns/textNav/",
                    columnStyle: []
                },
                PC: {
                    frontEndInterfaceSrc: "",
                    backstageViewsSrc: "",
                    contentEditViewSrc: "",
                    columnStyle: []
                },
                content: []
            },
            //图片导航
            {
                columnTit: "图片导航",
                columnName: "imgNav",
                mobile: {
                    frontEndInterfaceSrc: "views/visualization3/columns/imgNav/",
                    backstageViewsSrc: "views/visualization3/columns/imgNav/",
                    contentEditViewSrc: "views/visualization3/columns/imgNav/",
                    columnStyle: []
                },
                PC: {
                    frontEndInterfaceSrc: "",
                    backstageViewsSrc: "",
                    contentEditViewSrc: "",
                    columnStyle: []
                },
                content: []
            },
            //关联链接
            {
                columnTit: "关联链接",
                columnName: "relationLink",
                mobile: {
                    frontEndInterfaceSrc: "views/visualization3/columns/relationLink/",
                    backstageViewsSrc: "views/visualization3/columns/relationLink/",
                    contentEditViewSrc: "views/visualization3/columns/relationLink/",
                    columnStyle: []
                },
                PC: {
                    frontEndInterfaceSrc: "",
                    backstageViewsSrc: "",
                    contentEditViewSrc: "",
                    columnStyle: []
                },
                content: []
            },
            //商品搜索
            {
                columnTit: "商品搜索",
                columnName: "goodsSearch",
                mobile: {
                    frontEndInterfaceSrc: "views/visualization3/columns/goodsSearch/",
                    backstageViewsSrc: "views/visualization3/columns/goodsSearch/",
                    contentEditViewSrc: "views/visualization3/columns/goodsSearch/",
                    columnStyle: []
                },
                PC: {
                    frontEndInterfaceSrc: "",
                    backstageViewsSrc: "",
                    contentEditViewSrc: "",
                    columnStyle: []
                },
                content: []
            },
            //辅助线
            {
                columnTit: "辅助线",
                columnName: "assistantLine",
                mobile: {
                    frontEndInterfaceSrc: "views/visualization3/columns/assistantLine/",
                    backstageViewsSrc: "views/visualization3/columns/assistantLine/",
                    contentEditViewSrc: "views/visualization3/columns/assistantLine/",
                    columnStyle: []
                },
                PC: {
                    frontEndInterfaceSrc: "",
                    backstageViewsSrc: "",
                    contentEditViewSrc: "",
                    columnStyle: []
                },
                content: []
            },
            //辅助空白
            {
                columnTit: "辅助空白",
                columnName: "assistantBlank",
                mobile: {
                    frontEndInterfaceSrc: "views/visualization3/columns/assistantBlank/",
                    backstageViewsSrc: "views/visualization3/columns/assistantBlank/",
                    contentEditViewSrc: "views/visualization3/columns/assistantBlank/",
                    columnStyle: []
                },
                PC: {
                    frontEndInterfaceSrc: "",
                    backstageViewsSrc: "",
                    contentEditViewSrc: "",
                    columnStyle: []
                },
                content: []
            },
            //公告
            {
                columnTit: "公告",
                columnName: "notice",
                mobile: {
                    frontEndInterfaceSrc: "views/visualization3/columns/notice/",
                    backstageViewsSrc: "views/visualization3/columns/notice/",
                    contentEditViewSrc: "views/visualization3/columns/notice/",
                    columnStyle: []
                },
                PC: {
                    frontEndInterfaceSrc: "",
                    backstageViewsSrc: "",
                    contentEditViewSrc: "",
                    columnStyle: []
                },
                content: []
            },
            //营销活动
            {
                columnTit: "营销活动",
                columnName: "marketingActivity",
                mobile: {
                    frontEndInterfaceSrc: "views/visualization3/columns/marketingActivity/",
                    backstageViewsSrc: "views/visualization3/columns/marketingActivity/",
                    contentEditViewSrc: "views/visualization3/columns/marketingActivity/",
                    columnStyle: []
                },
                PC: {
                    frontEndInterfaceSrc: "",
                    backstageViewsSrc: "",
                    contentEditViewSrc: "",
                    columnStyle: []
                },
                content: []
            }
        ];


        //添加的栏目
        $scope.addColumnList = [
            {
                id: '-1',
                columnTit: "商品详情",
                columnName: "goodsDetail",
                mobile: {
                    frontEndInterfaceSrc: "views/visualization3/columns/goodsDetail/FEIView.html",
                    backstageViewsSrc: "views/visualization3/columns/goodsDetail/details.html",
                    contentEditViewSrc: "views/visualization3/columns/",
                    columnStyle: []
                },
                PC: {
                    frontEndInterfaceSrc: "",        //前端页面模板路径
                    backstageViewsSrc: "",        //后台编辑页面路径
                    contentEditViewSrc: "",      //后台内容编辑界面路径
                    columnStyle: []
                },
                content: [         //模块内容

                ]
            }
        ];

        //当前选中栏目的ID
        $scope.currentColumn = -1;
        //当前选中栏目的name
        $scope.currentColumnName = 'goodsDetail';
        //设置样式页面路径
        $scope.cBSSrc = 'views/visualization3/columns/goodsDetail/details.html';
        //内容添加页面路径
        $scope.cESrc = '';
        //栏目id数,防止删除栏目后添加了重复的id
        var cnum = 0;

        //添加栏目
        $scope.addColumn = function (cn) {
            //直接传item过来后添加到数组，再为其添加一个id，还是改变了原数组
            // $scope.addColumnList.push(cn);
            // $scope.addColumnList[$scope.addColumnList.length-1].id=$scope.addColumnList.length-2;

            //先转为字符串，再赋值，在转为json，然后添加
            var item = JSON.stringify(cn);
            item = JSON.parse(item);
            item.id = cnum;
            $scope.addColumnList.push(item);

            //新添加的变为选中状态
            $scope.currentColumn = cnum;
            $scope.currentColumnName = cn.columnName;
            $scope.cBSSrc =cn.mobile.backstageViewsSrc;
            $scope.cESrc =cn.mobile.contentEditViewSrc;
                    cnum++;

            updateScroll();

        };

        //删除栏目
        $scope.deleteColumn = function (cName, cId) {

            for (var i = 0; i < $scope.addColumnList.length; i++) {
                if ($scope.addColumnList[i].id == cId) {
                    if ($("#" + cName + cId).hasClass('activeColumn')) {
                        $scope.currentColumn = $scope.addColumnList[i - 1].id;
                        $scope.currentColumnName = $scope.addColumnList[i - 1].columnName;
                        $scope.cBSSrc = $scope.addColumnList[i-1].mobile.backstageViewsSrc;
                        $scope.cESrc =$scope.addColumnList[i-1].mobile.contentEditViewSrc;
                    }
                    $scope.addColumnList.splice(i, 1);
                    updateScroll();
                    break;
                }
            }
        }

        //选中栏目
        $scope.selectColumn = function (cName, cId,viewSrc) {
            if (!$("#" + cName + cId).hasClass('activeColumn')) {
                $scope.currentColumn = cId;
                $scope.currentColumnName = cName;

                $scope.cBSSrc = viewSrc.backstageViewsSrc;
                $scope.cESrc =viewSrc.contentEditViewSrc;
                updateArrowPosition();
            }
        }


    });