var app = angular.module('RedditEmblemHeroes', ['ngRoute']);
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider
		.when("/", {templateUrl: "../html/login.html", controller: "LoginCtrl"})
		.when("/home", {templateUrl: "../html/home.html", controller: "HomeCtrl"})
        .otherwise({redirectTo: "/"});
	$locationProvider.hashPrefix("");
}]);