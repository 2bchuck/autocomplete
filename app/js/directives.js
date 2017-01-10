restaurantsSearchApp.directive("restaurantSearch", function() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "./partials/restaurantSearch.html"
    };
});

restaurantsSearchApp.directive("restaurantsList", function() {
    var controllerFunction = function ($scope, $element, $attrs, $transclude) {
    };

    return {
        restrict: "E",
        replace: true,
        templateUrl: "./partials/restaurantsList.html",
        controller: controllerFunction
    };
});