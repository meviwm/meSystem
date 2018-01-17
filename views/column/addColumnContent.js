angular.module('ylmg.addColumnContent', ['angular-sortable-view'])
    .controller('addColumnContentCtrl', function ($scope) {
        $scope.test = 'asasa';
        $scope.lists= [
            {idL:0,productName:'test0',productCategory:'包',productBrand:'gucci',skus:'1212',createDate:'2016-09-08'},
            {idL:1,productName:'test1',productCategory:'手袋',productBrand:'gucci',skus:'1212',createDate:'2016-09-08'},
            {idL:2,productName:'test2',productCategory:'围巾',productBrand:'gucci',skus:'1212',createDate:'2016-09-08'},
            {idL:3,productName:'test3',productCategory:'包',productBrand:'gucci',skus:'1212',createDate:'2016-09-08'},
            {idL:4,productName:'test4',productCategory:'包',productBrand:'gucci',skus:'1212',createDate:'2016-09-08'},
            {idL:5,productName:'test5',productCategory:'包',productBrand:'gucci',skus:'1212',createDate:'2016-09-08'},
            {idL:6,productName:'test6',productCategory:'包',productBrand:'gucci',skus:'1212',createDate:'2016-09-08'},
            {idL:7,productName:'test7',productCategory:'包',productBrand:'gucci',skus:'1212',createDate:'2016-09-08'},
            {idL:8,productName:'test8',productCategory:'包',productBrand:'gucci',skus:'1212',createDate:'2016-09-08'},
            {idL:9,productName:'test9',productCategory:'包',productBrand:'gucci',skus:'1212',createDate:'2016-09-08'}
        ];

        $scope.sortable = function(){
            console.log($scope.lists);
        }
    });