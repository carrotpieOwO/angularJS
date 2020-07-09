angular.module('todo').directive('todoTitle', function(){
    return{
        template : '<div class="row align-items-center">'+'<h1>todo List</h1>' +
        '<span class="badge ml-auto mr-3" ng-class="warningLevel()" ng-hide="incompleteCount() == 0">'+
        '{{incompleteCount()}}'+
        '</span></div>'
    }
})

angular.module('todo').directive('todoItem', function(){
    return{
        templateUrl: 'todoItem.tpl.html',
        // template : '<div class="input-group">'
        // +'<div class="input-group-prepend">'
        // +'<div class="input-group-text">'
        // +'<input type="checkbox" ng-model="todo.completed">'
        // +'</div></div>'
        // +'<input type="text" class="form-control" ng-model="todo.title">'
        // +'<span class="input-group-append">'
        // +'<button class="btn btn-sm btn-danger" type="button" ng-click="remove(todo)">삭제!</button>'
        // +'</span></div>'
        // +'<date>{{todo.createdAt | date : "yyyy-MM-dd HH:mm"}}</date>'
        // +'}})'
    }
})

angular.module('todo').directive('todoFilters', function(){
    return{
        templateUrl : 'todoFilters.tpl.html'
    }
})

angular.module('todo').directive('todoForm',function(){
    return{
        templateUrl : 'todoForm.tpl.html'
    }
})