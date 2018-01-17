angular.module('ylmf.posterDetails', [])
    .controller('posterDetailsCtrl', function ($scope) {
        $scope.selectedTab = 'topLineUser';
        $scope.selectTab = function (l) {
            if ($scope.selectedTab != l) {
                $scope.selectedTab = l;
            }
        }
    })