angular.module('ylmf.visualization', [])
    .controller("visualizationCtrl", function ($scope,$timeout) {
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
                    setArrow(this);
                },
                whileScrolling: function () {
                    scrollTopHe = this.mcs.top;
                    setArrow(this);
                },
                onUpdate:function(){
                    setArrow(this);
                }
            }
        };


        $scope.settingsStyle='';
        //选择编辑的栏目
        $("#phoneBody").on('click','.userDefinedColumn',function(){
            if(!$(this).hasClass('activeColumn')){
                $(".userDefinedColumn").removeClass('activeColumn');
                $(this).addClass('activeColumn');
                $("#arrow").css('top', $(this).position().top+scrollTopHe + 58 + $(this).height() / 3);
                $scope.settingsStyle = $(this).attr('data-style-view');
            }
        });

        /*
        //使用angularjs的方法添加删除class，在读取当前有添加的class的时候始终读取的是前一个元素
        $scope.currentColumn = 'detail';
        $scope.editCurrentColumn = function (a) {
            console.log(arguments);
            if ($scope.currentColumn != a) {
                $scope.currentColumn = a;
            }
            console.log($("#phoneBody .activeColumn").position().top);
            $("#arrow").css('top', $("#phoneBody .activeColumn").position().top + 58 + $("#phoneBody .activeColumn").height() / 3);
        };
        */

        // console.log($scope.scrollbarsConfig)

        //箭头定位
        function setArrow(a) {
            if($("#phoneBody .activeColumn").length>0&&a.mcs!=undefined) {
                $("#arrow").css('top', $("#phoneBody .activeColumn").position().top + a.mcs.top + 58 + $("#phoneBody .activeColumn").height() / 3);
            }else{
                $("#arrow").css('top', $("#phoneBody .activeColumn").position().top+scrollTopHe + 58 + $("#phoneBody .activeColumn").height() / 3);
            }
        }



    //    添加的栏目
        $scope.addColumnList = [
            /*{
                conTmpSrc:'',
                editTmpSrc:''
            }*/
        ];
        $scope.addColumn = function(cs,es){
            var addColumnCon = {
                cid:$scope.addColumnList.length,
                conTmpSrc:cs,
                editTmpSrc:es
            }
            $scope.addColumnList.push(addColumnCon);
            //更新滚动条
            $("#phoneBody").mCustomScrollbar("update");
        }

        //删除添加的栏目
        $scope.deleteColumn = function(cid){
            //删除
            for(var i=0;i<$scope.addColumnList.length;i++){
                if($scope.addColumnList[i].cid==cid){
                    $scope.addColumnList.splice(i,1);
                    break;
                }
            }
            console.log($("#phoneBody .activeColumn"));
            //更新滚动条
            $("#phoneBody").mCustomScrollbar("update");

        }

        // $scope.settingsStyle = '';
        // $scope.editContent = '';


    });