restaurantsSearchApp.directive("restaurantSearch", function() {
    var controllerHandler = function ($scope, $element, $attrs, $transclude) {
        $scope.showSuggestion = function(show) {
            $scope.suggestion = show;
        };
    };

    return {
        restrict: "E",
        replace: true,
        templateUrl: "./partials/restaurantSearch.html",
        controller: controllerHandler
    };
});

restaurantsSearchApp.directive("restaurantsList", function() {
    var controllerHandler = function ($scope, $element, $attrs, $transclude) {
        $scope.selectSuggestion = function(item) {
            $scope.query = item.name;
            $scope.suggestion = false;
        };
    };

    return {
        restrict: "E",
        replace: true,
        templateUrl: "./partials/restaurantsList.html",
        controller: controllerHandler
    };
});