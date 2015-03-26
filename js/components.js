angular.module('components', [])

    .directive('dropdown', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {data: "=source"},
            link: function (scope, iElement, iAttrs, ngModel) {
                scope.data.variants.unshift('');

                scope.onKey = function ($event) {
                    if (!scope.opened) {
                        var arr = [13, 32, 40];
                        if (arr.indexOf($event.keyCode) >= 0) {
                            scope.opened = true;
                            scope.hoverItem = 0;
                        }

                    } else {
                        switch ($event.keyCode) {
                            case 13:
                                scope.curItem = scope.hoverItem;
                                scope.opened = false;
                                break;
                            case 27:
                                scope.opened = false;
                                break;
                            case 38:
                                scope.hoverItem = scope.hoverItem && scope.hoverItem - 1;
                                break;
                            case 40:
                                if (scope.hoverItem + 1 < scope.data.variants.length)
                                    scope.hoverItem = scope.hoverItem + 1;
                                break;
                        }
                    }
                };


            },
            templateUrl: "dropdown.html",
            replace: true
        };
    });