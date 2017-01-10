angular.module('restaurants-service', [])
    .factory('api', ['$http', function ($http) {
        var restaurantsAPI = {};

        restaurantsAPI.getRestaurants = function() {
            return $http.get('js/data.json');
        };

        return restaurantsAPI;
    }]);