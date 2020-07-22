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

app.directive('todoToggle', function(){
    return{
        templateUrl: 'todoToggle.tpl.html'
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
