angular.module('ylmf.userData.userDataDetails',[])
.controller('userDataDetailsCtrl',function($scope,$http){
    console.log('000');
    /*var topLineUser = '上线用户';
    var lowerLineUser = '下线用户';*/
    $scope.selectedTab = 'topLineUser';
    $scope.selectTab = function(l){
        if($scope.selectedTab!=l){
            $scope.selectedTab = l;
        }
    }

    $http({
        method : "post",
        url : 'dataJson/userDataDetail.json'
    }).then(function successCallback(response) {
        //console.log(angular.toJson(response));
        if (response.status == 200) {
            var result = response.data;
            if (result.header.flag == 1) {
                console.log(result.content);
                $scope.user=result.content;
            } else {
                layer.msg(result.header.errorDesc, {
                    icon : 0
                });
            }
        }
    }, function errorCallback(response) {
        console.log(response.headers.status);
    });

});