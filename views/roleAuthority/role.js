angular.module('ylmf.role', [])
    .controller('roleCtrl', function ($scope, $uibModal) {
        // layer.msg('wewewwewewe');
        /*layer.load(2, {
            shade: [0.2,'#000'] //0.1透明度的白色背景
        });*/
        $scope.createAdmin = function (s) {
            var meModal = $uibModal.open({
                animation: true,         //动画
                //appendTo:'body',        //将模态框添加到某个元素
                ariaDescribedBy: '',      //描述
                ariaLabelledBy: '',          //描述
                backdrop: true,                          //背景
                backdropClass: 'modal_bg',           //背景class
                windowClass: 'modal_container',     //modal容器class
                templateUrl: 'views/roleAuthority/editRole.html',
                size: 'lg',
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

                layer.msg('ok');
            }, function (a) {
                //关闭调用该函数
                console.log(a)
                layer.msg('玩命提示中');
            });
        }
    })
    .controller('adminCECtrl', function ($uibModalInstance, items, $scope) {
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
