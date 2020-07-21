//첫번째 인자 이름 두번째 인자 팩토리함수
app.controller("TodoCtrl", function ($scope, todoStorage) {
  this.myDate = new Date();
  this.isOpen = false;

  $scope.today = new Date().toLocaleDateString();
  $scope.todos = todoStorage.get();

  $scope.remove = function (todo) {
    //remove 도 서비스에서 받아오기
    todoStorage.remove(todo);
  };

  $scope.add = function (newTodoCategory, newTodoTitle, newTodoDate, newColor) {
    if (newTodoCategory)
      //데이터 조작하는 부분만 service에서 넘겨받기
      console.log(newTodoCategory, newTodoDate, newTodoTitle, newColor);

      todoStorage.add(newTodoCategory, newTodoTitle, newTodoDate, newColor);

    //empty form
    $scope.newTodoTitle = "";
    $scope.newTodoCategory = "";
    $scope.newTodoDate = "";
  };

  $scope.update = function () {
    todoStorage.update();
  };

  $scope.percentage = function(){
    var completedCount = 0;
    var todosLength = $scope.todos.length;

    angular.forEach($scope.todos, function(todo){
      if(todo.completed){completedCount++}
    })

    var percentage = completedCount/todosLength*100

    return percentage;
  }

  // $scope.buttonNames = ["Red", "Green", "Blue"];
});
