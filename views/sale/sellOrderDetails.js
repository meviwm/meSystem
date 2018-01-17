angular.module('ylmf.sellOrderDetails',[])
.controller('sellOrderDetailsCtrl',function($scope){
    $scope.selectedTab = 'ddxq';
    $scope.selectTab = function (a) {
        if($scope.selectedTab!=a){
            $scope.selectedTab=a;
        }
    }
})