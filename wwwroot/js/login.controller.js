app.controller('LoginCtrl', ['$scope', '$location', function ($scope, $location) {
    //Redirect user to a page
    $scope.redirect = function(){
    	$location.path('/home').replace();
    };
}]);