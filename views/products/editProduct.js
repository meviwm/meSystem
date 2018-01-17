angular.module('ylmf.editProduct',[])
.controller('editProductCtrl',function($scope,$http,$uibModal,$stateParams){

    console.log($stateParams.id);

    getBrand();
    function getBrand(id) {
        if(id==undefined||id==''){
            id='';
        }
        $http({
            method: "get",
            url: 'dataJson/brand'+id+'.json',
            // params: {id: id}
        }).then(function (response) {
            console.log(response);
            $scope.itemArray = response.data.content;
        }, function (response) {
            //console.log(response)
        });
    }

    $scope.selectedTab = 'cpms';
    $scope.selectTab = function(a){
        if($scope.selectedTab!=a){
            $scope.selectedTab=a;
        }
    }
})