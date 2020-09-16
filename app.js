(function() {
    'use strict';

    angular.module('DIApp', [])

    .controller('DIController', DIController);

    function DIController($scope, $filter) {
        $scope.name = "";
        $scope.message = "";
        $scope.onClickMe = function() {
            var nameArr = $scope.name.split(',').join('');

            if (nameArr.length == 0) {
                $scope.message = "Please enter data first";
            } else if (nameArr.length < 4 && nameArr.length != 0) {
                $scope.message = "Enjoy";

            } else if (nameArr.length > 3) {
                $scope.message = "Too Much";
            }

        };



    }


})();