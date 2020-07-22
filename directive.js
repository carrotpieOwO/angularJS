app.directive('highlight', function () {
    return function (scope, element, attrs) {
        if (scope.day == attrs['hightlight']) {
            element.css('color', 'red')
        }
    }
})

app.directive('todoDate', function () {
    let today = new Date().toLocaleDateString();
    return {
        template: '<h1 class="text-center">' + today + '</h1>'
    }
})

app.directive('todoTitle', function () {
    return {
        template: '<h1 class="my-4">Todo List</h1>'
    }
})

app.directive('todoCard', function () {
    return {
        templateUrl: 'todoCards.tpl.html'
    }
})

app.directive('todoItem', function () {
    return {
        templateUrl: 'todoItem.tpl.html',

    }
})

app.directive('todoFilters', function () {
    return {
        templateUrl: 'todoFilters.tpl.html'
    }
})

app.directive('todoForm', function () {
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
                    dateFormat: "yy. m. dd.",
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
