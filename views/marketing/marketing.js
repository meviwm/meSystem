angular.module('ylmf.marketing', [])
    .controller('marketingCtrl', function ($scope,$uibModal) {
        //步骤选择
        $scope.selectedTab = 'selectGoods';
        $scope.selectTab = function (a) {
            if ($scope.selectedTab != a) {
                $scope.selectedTab = a;
            }
        }
    });