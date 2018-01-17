angular.module('ylmf.column', ['angular-sortable-view'])
    .controller('columnCtrl', function ($scope, $http, $timeout, $uibModal,$state,$document,$ocLazyLoad) {
        $http
            .get("dataJson/treeData.json")
            .then(function (data) {
                console.log(data);
                $scope.treeData = data.data;
            }, function (err) {
                console.log(err);
            });


        $scope.openModal = function (s) {
            var meModal = $uibModal.open({
                animation: true,         //动画
                appendTo:angular.element($document[0].querySelector('.content_box')),        //将模态框添加到某个元素
                ariaDescribedBy: '',      //描述
                ariaLabelledBy: '',          //描述
                backdrop: true,                          //背景
                backdropClass: 'modal_bg',           //背景class
                windowClass: 'modal_container',     //modal容器class
                templateUrl: 'views/column/editColumn.html',
                size: 'lg',
                controller: 'modalCtrl',
                resolve: {
                    //打开模态框时向模态框传递的数据
                    items: function () {
                        return s;
                    }
                }
            });

            meModal.result.then(function (selectedItem) {
                //保存调用该函数
                console.log(selectedItem)
            }, function (a) {
                //关闭调用该函数
                console.log(a)
            });
        };

        //打开添加栏目内容的模态框
        $scope.openAddColumnContentModal = function (s) {
            // $ocLazyLoad.load('sortable');
            var meModal = $uibModal.open({
                animation: true,         //动画
                appendTo:angular.element($document[0].querySelector('.content_box')),        //将模态框添加到某个元素
                // ariaDescribedBy: '',      //描述
                // ariaLabelledBy: '',          //描述
                backdrop: true,                          //背景
                backdropClass: 'modal_bg',           //背景class
                windowClass: 'modal_container_exception',     //modal容器class
                templateUrl: 'views/column/addColumnContent.html',
                // size: 'lg',
                controller: 'addColumnContentCtrl',
                resolve: {
                    //打开模态框时向模态框传递的数据
                    items: function () {
                        return s;
                    }
                }
            });

            meModal.result.then(function (selectedItem) {
                //保存调用该函数
                console.log(selectedItem)
            }, function (a) {
                //关闭调用该函数
                console.log(a)
            });
        };


        $timeout(function () {
            $("#tree").jstree({
                core: {
                    force_text: true,
                    check_callback: true
                },
                plugins: ["contextmenu" /*,"state"*/],
                types:{
                    default : {
                        "icon" : "glyphicon glyphicon-flash"
                    },
                    demo : {
                        "icon" : "glyphicon glyphicon-ok"
                    }
                },
                contextmenu: {
                    items: {
                        create: {
                            label: "添加子栏目",
                            icon: "fa fa-sign-in",
                            //是否可以点击
                            //data参数为弹出菜单对应的item
                            //data.reference为a标签
                            _disabled: function (data) {
                                console.log(data);
                                return false;
                            },
                            //点击事件执行的函数
                            action: function (obj) {
                                // console.log(obj);
                                $scope.openModal('create')
                            }
                        },
                        edit: {
                            label: "编辑栏目",
                            icon: "fa fa-pencil",
                            _disabled: false,
                            /*_disabled:function(data){

                             },*/
                            //是否在后面添加分割线
                            separator_after: true,
                            action: function (obj) {
                                console.log("000");
                                $scope.openModal('edit');
                            }
                        },

                        addColumnContent: {
                            label: "添加栏目类容",
                            separator_before: true,
                            _disabled: function (data) {
                            },
                            action: function (obj) {
                                // $state.go('me.addColumnContent');
                                // $scope.openModal('addColumnContent');
                                $scope.openAddColumnContentModal()
                            }
                        },

                        seeColumnContent: {
                            label: "管理栏目类容",
                            _disabled: function (data) {
                            },
                            action: function (obj) {
                            }
                        },
                        disable: {
                            label: "禁用",
                            separator_before: true,
                            icon: "fa fa-minus-circle",
                            _disabled: function (data) {
                            },
                            action: function (obj) {
                                $scope.openModal('del');
                            }
                        },
                        enable: {
                            label: "启用",
                            icon: "fa fa-check-square-o",
                            _disabled: function (data) {
                            },
                            action: function (obj) {
                                $scope.openModal('recover');
                            }
                        },

                        /*delColumnContent: {
                            label: "删除栏目类容",
                            _disabled: function (data) {
                            },
                            action: function (obj) {
                                $scope.openModal('delete');
                            }
                        },*/

                        /*sortColumnContent: {
                            label: "排序栏目类容",
                            _disabled: function (data) {
                            },
                            action: function (obj) {
                            }
                        }*/
                    }
                }
            });
        },1000)
    })
    .controller('modalCtrl', function ($uibModalInstance, items, $scope) {
        //打开模态框时传过来的数据
        $scope.state = items;
        console.log($scope.state);
        //取消调用的函数
        $scope.closeModal = function () {
            $uibModalInstance.dismiss('cancel');
        };
        //确定调用的函数
        $scope.saveAdmin = function (d) {
            //向adminCtrl传递数据
            $uibModalInstance.close(d);
        };
    })
    .controller('addColumnContentCtrl', function ($uibModalInstance, items, $scope,$http) {



        //打开模态框时传过来的数据
        $scope.state = items;
        console.log($scope.state);
        //取消调用的函数
        $scope.closeModal = function () {
            $uibModalInstance.dismiss('cancel');
        };
        //确定调用的函数
        $scope.saveAdmin = function (d) {
            //向adminCtrl传递数据
            $uibModalInstance.close(d);
        };

        // $scope.test = 'asasa';
        /*$scope.lists= [
            {id:0,productName:'test0',productCategory:'包',productBrand:'gucci',skus:'1212',createDate:'2016-09-08'},
            {id:1,productName:'test1',productCategory:'手袋',productBrand:'gucci',skus:'1212',createDate:'2016-09-08'},
            {id:2,productName:'test2',productCategory:'围巾',productBrand:'gucci',skus:'1212',createDate:'2016-09-08'}/!*,
            {id:3,productName:'test3',productCategory:'包',productBrand:'gucci',skus:'1212',createDate:'2016-09-08'},
            {id:4,productName:'test4',productCategory:'包',productBrand:'gucci',skus:'1212',createDate:'2016-09-08'},
            {id:5,productName:'test5',productCategory:'包',productBrand:'gucci',skus:'1212',createDate:'2016-09-08'},
            {id:6,productName:'test6',productCategory:'包',productBrand:'gucci',skus:'1212',createDate:'2016-09-08'},
            {id:7,productName:'test7',productCategory:'包',productBrand:'gucci',skus:'1212',createDate:'2016-09-08'},
            {id:8,productName:'test8',productCategory:'包',productBrand:'gucci',skus:'1212',createDate:'2016-09-08'},
            {id:9,productName:'test9',productCategory:'包',productBrand:'gucci',skus:'1212',createDate:'2016-09-08'}*!/
        ];*/

        $http
            .get("dataJson/columnSort.json")
            .then(function (data) {
                console.log(data);
                $scope.lists = data.data;
            }, function (err) {
                console.log(err);
            });



        $scope.sortable = function($item,$partFrom, $partTo, $indexFrom, $indexTo){
            // console.log($item);         //被拖动的那条数据
            // console.log($partFrom);     //排序后的顺序
            // console.log($partTo);           //排序后的顺序
            // console.log($indexFrom);    //移动的数据
            // console.log($indexTo);      //放置的前一条数据
        };

        $scope.sortableEnd = function($item, $part, $index){
            console.log($item);     //被拖动的那条数据
            console.log($part);     //排序后的顺序
            console.log($index);    //被拖动的数据的原始位置
        }


    });