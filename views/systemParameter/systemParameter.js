angular.module('ylmf.systemParameter', [])
    .controller('systemParameterCtrl', function ($scope, $http, $timeout, $uibModal) {
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
                //appendTo:'body',        //将模态框添加到某个元素
                ariaDescribedBy: '',      //描述
                ariaLabelledBy: '',          //描述
                backdrop: true,                          //背景
                backdropClass: 'modal_bg',           //背景class
                windowClass: 'modal_container',     //modal容器class
                templateUrl: 'views/systemParameter/editSysPar.html',
                size: 'md',
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
        }


        $timeout(function () {
            $("#tree").jstree({
                core: {
                    force_text: true,
                    check_callback: true
                },
                plugins: ["contextmenu" /*,"state"*/],
                contextmenu: {
                    items: {
                        create: {
                            label: "添加栏目",
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
                        disable: {
                            label: "禁用",
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

                        addColumnContent: {
                            label: "添加栏目类容",
                            separator_before: true,
                            _disabled: function (data) {
                            },
                            action: function (obj) {
                            }
                        },

                        seeColumnContent: {
                            label: "浏览栏目类容",
                            _disabled: function (data) {
                            },
                            action: function (obj) {
                            }
                        },

                        delColumnContent: {
                            label: "删除栏目类容",
                            _disabled: function (data) {
                            },
                            action: function (obj) {
                                $scope.openModal('delete');
                            }
                        },

                        sortColumnContent: {
                            label: "排序栏目类容",
                            _disabled: function (data) {
                            },
                            action: function (obj) {
                            }
                        }
                    }
                }
            });
        })
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
    });