//첫번째 인자 이름 두번째 인자 팩토리함수
app.controller("TodoCtrl", function ($scope, todoStorage) {
  this.myDate = new Date();
  this.isOpen = false;

  $scope.today = new Date().toLocaleDateString();
  $scope.selectedTodos = [];
  $scope.loadingState = false;
//  $scope.todos;

  (async function getTodos(){
    await todoStorage.get().then((res)=>{
     console.log(res)
     console.log($scope.loadingState)
    
     // return res;

     $scope.percentage = function(todos){
      var completedCount = 0;
      var todosLength = todos.length;
     // console.log(todosLength)
  
      angular.forEach(todos, function(todo){
        if(todo.completed){completedCount++}
      })
  
      var percentage = completedCount/todosLength *100
      return percentage;
    }

    $scope.$apply(function(){
      $scope.loadingState =true
      $scope.todos = res;
    });

    console.log($scope.todos)
    console.log($scope.loadingState)
    
    })
  })()

  //변수명 바꾸기 
  $scope.switchDay = function(cal){
    console.log(cal)
    const tomorrow = new Date($scope.today)
    const yesterday = new Date($scope.today)
    tomorrow.setDate(tomorrow.getDate()+1)
    yesterday.setDate(yesterday.getDate()-1)
    if(cal === 'next'){
      console.log('next')

      $scope.today = tomorrow.toLocaleDateString()
      console.log($scope.today)
    }else{
      $scope.today = yesterday.toLocaleDateString()
    }
  }

  $scope.remove = function (todo) {
    //remove 도 서비스에서 받아오기
    todoStorage.remove(todo);
  };

  $scope.formData = {};

  $scope.add = function (newTodoCategory, newTodoTitle, newTodoDate, newColor) {
    if (newTodoCategory)
      //데이터 조작하는 부분만 service에서 넘겨받기
      console.log(newTodoCategory, newTodoDate, newTodoTitle, newColor);

      todoStorage.add(newTodoCategory, newTodoTitle, newTodoDate, newColor);

    //empty form
      $scope.formData.newTodoTitle = '';  
      $scope.formData.newTodoCategory = '';
      $scope.formData.newTodoDate = '';
      console.log($scope.formData.newTodoTitle);
  };

  $scope.update = function () {
    todoStorage.update();
  };


  $scope.selectTodos = function(todo){
    // $scope.selectedTodos = todo.closingDate >= $scope.today
    return todo.closingDate >= $scope.today
  }

});

