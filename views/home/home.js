angular.module('ylmf.home', [])
    .controller('homeCtrl', function ($scope, $http) {
        console.log('home');

        getBrand();
        function getBrand(id) {
            if (id == undefined || id == '') {
                id = '';
            }
            $http({
                method: "get",
                url: 'dataJson/selectBrand.json'
                // params: {id: id}
            }).then(function (response) {
                console.log(response);
                $scope.itemArray = response.data.content;
            }, function (response) {
                //console.log(response)
            });
        }

        $scope.obj = {
            aaa: '111'
        };
        $scope.bbb = 222;

    })