angular.module('ylmf.commodity', [])
    .controller('commodityCtrl', function ($scope, $uibModal) {
        $scope.openModal = function (s) {
            var meModal = $uibModal.open({
                animation: true,         //动画
                //appendTo:'body',        //将模态框添加到某个元素
                ariaDescribedBy: '',      //描述
                ariaLabelledBy: '',          //描述
                backdrop: true,                          //背景
                backdropClass: 'modal_bg',           //背景class
                windowClass: 'modal_container',     //modal容器class
                templateUrl: 'views/products/editCommodity.html',
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