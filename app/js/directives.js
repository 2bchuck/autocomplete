/**
 * Directive for search panel element.
 */
restaurantsSearchApp.directive("restaurantSearch", function() {
    var controllerHandler = function ($scope, $element, $attrs, $transclude) {
        var pointer = -1;

        /**
         * Re initialize select pointer.
         */
        $scope.reinit = function() {
            pointer = -1;
        };

        /**
         * Set the state to show suggestion list.
         */
        $scope.showSuggestion = function(show) {
            $scope.suggestion = show;
        };

        /**
         * Key event handler.
         */
        $scope.handleKey = function(event) {
            $scope.showSuggestion(true);
            if ($scope.query && 
                $scope.suggested.length > 0) {
                if (event.key === "ArrowDown") {
                    navigateDown();
                } else if (event.key === "ArrowUp") {
                    navigateUp();
                } else if (event.key === "Enter") {
                    selectItem();
                }
            }
        };

        /**
         * Move focus up.
         */
        function navigateUp() {
            if (pointer > 0) {
                pointer--;
            }

            activate();
        }

        /**
         * Move focus down.
         */
        function navigateDown() {
            if (pointer < $scope.suggested.length - 1) {
                pointer++;
            }

            activate();
        }

        /**
         * Activate selected list node.
         */
        function activate() {
            $scope.activate(pointer);
        }

        /**
         * Fill the input field with selected item's name.
         */
        function selectItem() {
            $scope.selectSuggestion($scope.suggested[pointer]);
            $scope.reinit();
        }
    };

    return {
        restrict: "E",
        replace: true,
        templateUrl: "./partials/restaurantSearch.html",
        controller: controllerHandler
    };
});

/**
 * Directive for suggestion list items.
 */
restaurantsSearchApp.directive("restaurantsList", function() {
    var controllerHandler = function ($scope, $element, $attrs, $transclude) {
        /**
         * Fill the input field with selected item's name.
         */
        $scope.selectSuggestion = function(item) {
            $scope.query = item.name;
            deactivateLists();
            $scope.suggestion = false;
            $scope.reinit();
        };

        /**
         * Activate selected list node.
         */
        $scope.activate = function(pointer) {
            deactivateLists();
            $element[0].children[pointer].classList.add('focus');
        };

        /**
         * Deactivate all the list nodes.
         */
        function deactivateLists() {
            for (var i = 0; i < $element[0].children.length; i++) {
                $element[0].children[i].classList.remove('focus');
            }
        }
    };

    return {
        restrict: "E",
        replace: true,
        templateUrl: "./partials/restaurantsList.html",
        controller: controllerHandler
    };
});