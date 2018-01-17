angular.module('ylmf.orderDetail', [])
    .controller('orderDetailCtrl', function ($scope,$stateParams,$http,$uibModal) {
        console.log($stateParams);

        //tab 切换
        $scope.selectedTab = 'ddxq';
        $scope.selectTab = function (a) {
            if($scope.selectedTab!=a){
                $scope.selectedTab=a;
            }
        };


        //数据请求
        $http({
            url:'dataJson/orderDetail.json'
        }).then(function success(response){
            //console.log(response);
            if (response.status == 200) {
                var result = response.data;
                console.log(result);
                if (result.header.flag == 1) {
                    $scope.orders = result.content.order[0];
                    console.log($scope.orders)
                } else {
                    layer.alert("查询失败");
                }
            }
        },function error(data){
            console.log(data);
        });


        //发货单
        $http({
            url:'dataJson/sendOrder.json'
        }).then(function success(response){
            console.log(response);
            if (response.status == 200) {
                    $scope.sandOrders = response.data;
            } else {
                layer.alert("查询失败");
            }
        },function error(data){
            console.log(data);
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
                templateUrl: 'views/sale/orderDetailModal.html',
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

    })
    .controller('modalCtrl', function ($uibModalInstance, items, $scope,$http) {


        //发货单
        $http({
            url:'dataJson/sendOrder.json'
        }).then(function success(response){
            console.log(response);
            if (response.status == 200) {
                $scope.sandOrders = response.data;
            } else {
                layer.alert("查询失败");
            }
        },function error(data){
            console.log(data);
        });


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