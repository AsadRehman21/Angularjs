(function() {
    'use strict';

    angular.module('DIApp', [])

    .controller('DIController', DIController);

    function DIController($scope, $filter) {
        $scope.name = '';
        $scope.message = "";
        $scope.onClickMe = function() {
            var nameArr = $scope.name.split(',');
            if ($scope.name == '') {

                $scope.message = "Please enter data first";

            } else if (nameArr.length <= 3 && nameArr.length >= 1) {
                $scope.message = "Enjoy";

            } else if (nameArr.length > 3) {

                $scope.message = "Too Much";
            }

        };



    }


})();