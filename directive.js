app.directive('todoTitle', function () {
    return {
        template: '<h1 class="my-4">Todo List</h1>'
    }
})

app.directive('todoDate', function () {
    return {
        templateUrl: 'todoDate.tpl.html'
    }
})

app.directive('todoItem', function () {
    return {
        templateUrl: 'todoItem.tpl.html'
    }
})

app.directive('todoStatusFilters', function () {
    return {
        templateUrl: 'todoStatusFilters.tpl.html'
    }
})

app.directive('todoCategoryFilters', function () {
    return {
        templateUrl: 'todoCategoryFilters.tpl.html'
    }
})

app.directive('todoForm', function () {
    return {
        templateUrl: 'todoForm.tpl.html'
    }
})

app.directive('todoToggle', function () {
    return {
        templateUrl: 'todoToggle.tpl.html'
    }
})

app.directive('datePickerDirective', [
    function () {
        return {
            require: 'ngModel',
            link: function (scope, el, attrs, ngModel) {
                $(el).datepicker({
                    dateFormat: "yy. m. dd.",
                    changeMonth: true,
                    changeYear: true,
                    onSelect: function (dateText) {
                        // console.log(dateText);
                        scope.$apply(function () {
                            ngModel.$setViewValue(dateText);
                        });
                    }
                });
            }
        }
    }
])