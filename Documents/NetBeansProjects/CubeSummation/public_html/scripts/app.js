/* 
 * @@Author: Margarita Hoyos
 */

var app = angular.module("CubeSummation",[]);

app.controller("ctrlSummation", function($scope)
{
    $scope.result = 'searching...';

    $scope.point = { x : 1, y : 1, z : 1, w : 0};
    $scope.start = { t : 2, n : 4, m : 5 };
    
    $scope.sum = function(){};
    $scope.validate = function()
    {
        return ($scope.start.t >= 1 && $scope.start.t <= 50) && ($scope.start.n >= 1 && $scope.start.n <= 100) 
                && ($scope.start.m >= 1 && $scope.start.m <= 100);
    };
});