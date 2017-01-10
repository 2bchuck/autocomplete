var restaurantsSearchApp = angular.module('restaurantsSearchApp', []);

restaurantsSearchApp.controller('RestaurantController', ['$scope', '$http', function($scope, $http) {
    $http.get('js/data.json').success(function(data) {
        $scope.restaurants = data;
    });
}]);