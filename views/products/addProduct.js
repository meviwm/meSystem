angular.module('ylmf.addProduct', [])
    /*.filter('hasShow',function(item){
        console.log(item);
        return item;
    })*/
    .controller('addProductCtrl', function ($scope, $http,$uibModal) {

        $scope.openModal = function (s) {
            var meModal = $uibModal.open({
                animation: true,         //动画
                //appendTo:'body',        //将模态框添加到某个元素
                ariaDescribedBy: '',      //描述
                ariaLabelledBy: '',          //描述
                backdrop: true,                          //背景
                backdropClass: 'modal_bg',           //背景class
                windowClass: 'modal_container',     //modal容器class
                templateUrl: 'views/other/fileUpload.html',
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
        }


        $scope.hasShow = function(item){
            //console.log(item);
            if(item.test.me) {
                return item;
            }
        }

        getBrand();
        function getBrand(id) {
            if (id == undefined || id == '') {
                id = '';
            }
            $http({
                method: "get",
                url: 'dataJson/brand' + id + '.json',
                // params: {id: id}
            }).then(function (response) {
                console.log(response);
                $scope.itemArray = response.data.content;
            }, function (response) {
                //console.log(response)
            });
        }

        //分类
        //所有数据
        $scope.categorys = '';
        $scope.hasChildren = false;
        getCategory();
        function getCategory(id) {
            //id是否为空
            if (id == undefined) {
                id = ''
            }
            $http({
                method: "get",
                url: 'dataJson/category_' + id + '.json',
                //params: {id: id}
            }).then(function (response) {
                if(response.data.content!=null&&response.data.content.length>0) {
                    //判断是否是顶级分类；不是将数据赋给对应的children
                    if ($scope.categorys == '' || $scope.categorys == undefined) {
                        $scope.categorys = response.data.content;
                    } else {
                        for (var i in $scope.categorys) {
                            if ($scope.categorys[i].id == id) {
                                $scope.categorys[i].children = response.data.content;
                                break;
                            }
                            if(id){}
                        }
                    }
                    // $scope.hasChildren=true;
                }else{
                    // $scope.hasChildren=false;
                }
            }, function (response) {
                //console.log(response)
            });
        }

        $scope.selectedCategoryId = '';
        $scope.selectCategory = function (id) {
            if ($scope.selectedCategoryId == id) {
                $scope.selectedCategoryId = '';
            } else {
                getCategory(id);
                $scope.selectedCategoryId = id;
            }
        }


        //步骤选择
        $scope.selectedTab = 'category';
        $scope.selectTab = function (a) {
            if ($scope.selectedTab != a) {
                $scope.selectedTab = a;
            }
        }

        //其他信息下的选择
        $scope.selectTab2 = function (a) {
            if ($scope.selectedTab2 != a) {
                $scope.selectedTab2 = a;
            }
        }

        $http({
            method: "get",
            url: 'dataJson/addProductOtherInfo.json',
            // params: {id: id}
        }).then(function (response) {
            console.log(response);
            $scope.productBigDataTypes = response.data;
            $scope.selectedTab2 = $scope.productBigDataTypes.bigDatatypes[0].id;
        }, function (response) {
            //console.log(response)
        });



        //编辑器
        // 创建Uedit编辑区
        $scope.openUEdit = function(tmp, content) {
            var ue = UE.getEditor(tmp);

            ue.addListener("ready", function() {
                // editor准备好之后才可以使用
                ue.setContent(content);

            });
        }

        /*$scope.createAdmin = function (s) {
         var meModal = $uibModal.open({
         animation: true,         //动画
         //appendTo:'body',        //将模态框添加到某个元素
         ariaDescribedBy: '',      //描述
         ariaLabelledBy: '',          //描述
         backdrop: true,                          //背景
         backdropClass: 'modal_bg',           //背景class
         windowClass: 'modal_container',     //modal容器class
         templateUrl: 'views/administrate/createEditAdmin.html',
         size: 'md',
         controller: 'adminCECtrl',
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
         }*/

    })
    .controller('modalCtrl', function ($uibModalInstance, items, $scope) {
        //打开模态框时传过来的数据
        $scope.state = items;
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