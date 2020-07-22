//첫번째 인자 이름 두번째 인자 팩토리함수
app.controller("TodoCtrl", function ($scope, todoStorage, $anchorScroll) {
  $scope.today = new Date().toLocaleDateString();
  $scope.loadingState = false;

  //todo 데이터 받아오기
  (async function getTodos(){
    await todoStorage.get().then((res)=>{
      $scope.percentage = function(todos){
        var completedCount = 0;
        var todosLength = todos.length;
        angular.forEach(todos, function(todo){
          if(todo.completed){completedCount++}
        })
        var percentage = Math.ceil(completedCount/todosLength *100)
        return percentage;
      }

      //중요!! 한번 더 보기
      $scope.$apply(function(){
        $scope.loadingState =true
        $scope.todos = res;
      });
    })
  })()

  //투두 추가
  $scope.formData = {};
  $scope.add = function (newTodoCategory, newTodoTitle, newTodoDate, newColor) {
    if (newTodoCategory)
      console.log(newTodoCategory, newTodoDate, newTodoTitle, newColor);
      todoStorage.add(newTodoCategory, newTodoTitle, newTodoDate, newColor);

    //add 하고나서 폼 비워주기
      $scope.formData.newTodoTitle = '';  
      $scope.formData.newTodoCategory = '';
      $scope.formData.newTodoDate = '';
      $scope.formData.newColor = '';
  };

  //투두 수정
  $scope.update = function () {
    todoStorage.update();
  };
  
  //투두 삭제
  $scope.remove = function (todo) {
    todoStorage.remove(todo);
  };

  //투두 필터: 마감일 지난거 보여주지 않기
  $scope.selectTodos = function(todo){
    return todo.closingDate >= $scope.today
  }

  //날짜이동
  $scope.changeDate = function(indicator){
    const tomorrow = new Date($scope.today)
    const yesterday = new Date($scope.today)
    tomorrow.setDate(tomorrow.getDate()+1)
    yesterday.setDate(yesterday.getDate()-1)
    if(indicator === 'next'){
      $scope.today = tomorrow.toLocaleDateString()
      //console.log($scope.today)
    }else{
      $scope.today = yesterday.toLocaleDateString()
    }
  }
  
  // 상단 이동 버튼
  $scope.gotoTop = function () {
    $anchorScroll('top');
  };

});

