angular.module('todo').directive('highlight', function () {
    return function (scope, element, attrs) {
        if (scope.day == attrs['hightlight']) {
            element.css('color', 'red')
        }
    }
})


angular.module('todo').directive('todoDate', function () {
    let today = new Date().toLocaleDateString();
    return {
        template: '<h1 class="text-center">' + today + '</h1>'
    }
})

angular.module('todo').directive('todoTitle', function () {
    return {
        template: '<h1>Todo List</h1>'
    }
})

angular.module('todo').directive('todoCard', function () {
    return {
        templateUrl: 'todoCards.tpl.html'
    }
})

angular.module('todo').directive('todoItem', function () {
    return {
        templateUrl: 'todoItem.tpl.html',

    }
})

angular.module('todo').directive('todoFilters', function () {
    return {
        templateUrl: 'todoFilters.tpl.html'
    }
})

angular.module('todo').directive('todoForm', function () {
    return {
        templateUrl: 'todoForm.tpl.html'
    }
})

app.directive('datePickerDirective', [
    function () {
        return {
            require: 'ngModel',
            link: function (scope, el, attr, ngModel) {
                $(el).datepicker({
                    dateFormat: "yy-mm-dd",
                    changeMonth: true,
                    changeYear: true,
                    onSelect: function (dateText) {
                        scope.$apply(function () {
                            ngModel.$setViewValue(dateText);
                        });
                    }
                });
            }
        }
    }
])