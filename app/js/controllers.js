restaurantsSearchApp.controller('RestaurantController', ['$scope', 'api', function($scope, api) {
    api.getRestaurants().success(function(data) {
        $scope.restaurants = data;
    });
}]);

