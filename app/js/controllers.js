restaurantsSearchApp.controller('RestaurantController', ['$scope', 'api', function($scope, api) {    
    $scope.suggestion = true;

    api.getRestaurants().success(function(data) {
        $scope.restaurants = data;
        $scope.restaurantOrder = 'name';
    });
}]);

