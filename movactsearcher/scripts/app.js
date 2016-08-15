/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = angular.module("movActSearcher", ["ngRoute"]);

/* Constants for get data from tmbd api */
app.constant('TMDB_URL', 'http://api.themoviedb.org/3');
app.constant('SERVICE', '/search/multi');
app.constant('API_KEY', 'a0cc7c622e4012ed0e15a080fb621a88');
app.constant('CALLBACK', 'JSON_CALLBACK');

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/menu.html"
    })
    .when("/about", {
        templateUrl : "views/about.html"
    })
    .when("/contact", {
        templateUrl : "views/contact.html"
    });
});

/* Controler for get data from tmdb api */
app.controller("ctrlSearcher", function($scope, $http, TMDB_URL, SERVICE, API_KEY, CALLBACK) {
    $scope.result = 'searching...';
    $scope.submit = function()
    {
        if ($scope.name) {
            var url = TMDB_URL + SERVICE + '?api_key=' + API_KEY + '&query=' + $scope.name.replace(" ", "+") + '&callback=' + CALLBACK;
            $scope.name = "";
            $scope.movieList = [];
            $http.jsonp(url).then(function(data, status) {
                $scope.result = angular.fromJson(data);
                $scope.movieList = angular.fromJson(data.data.results);
            });
        }
    }; 
});