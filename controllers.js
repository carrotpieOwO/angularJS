//첫번째 인자 이름 두번째 인자 팩토리함수
app.controller("TodoCtrl", function ($scope, todoStorage, $anchorScroll) {
  $scope.today = new Date().toLocaleDateString();
  $scope.loadingState = false;
  $scope.todos;
  $scope.percentage;

  //다시보기
  //todo 데이터 받아오기
  (async function getTodos() {
    console.log('호출됨')
    await todoStorage.get().then((res) => {
      $scope.$apply(function () {
        $scope.todos = res;
        $scope.loadingState = true;
        $scope.percentage = function (todos) {
          let completedCount = 0;
          let todosLength = todos.length;
          let percentage = 0;

          if (todosLength != 0) {
            angular.forEach(todos, function (todo) {
              if (todo.completed) { completedCount++ }
            })
            percentage = Math.ceil(completedCount / todosLength * 100);
          }
          // console.trace('digest trace')
          // console.time('digest time')
          return percentage;
        }
      });
    })
  })()

  //투두 추가
  $scope.formData = {};
  $scope.add = function (newTodoCategory, newTodoTitle, newTodoDate, newColor) {
    // console.log(newTodoCategory, newTodoDate, newTodoTitle, newColor);
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

  //날짜이동
  $scope.changeDate = function (indicator) {
    const nextDay = new Date($scope.today);
    const prevDay = new Date($scope.today);
    nextDay.setDate(nextDay.getDate() + 1);
    prevDay.setDate(prevDay.getDate() - 1);
    if (indicator === 'next') {
      $scope.today = nextDay.toLocaleDateString();
      //console.log($scope.today)
    } else {
      $scope.today = prevDay.toLocaleDateString();
    }
  }

  //투두 필터: 마감일 지난거 보여주지 않기
  $scope.hideClosingTodos = function (todo) {
    return todo.closingDate >= $scope.today
  }


  // 상단 이동 버튼
  $scope.gotoTop = function () {
    $anchorScroll('top');
  };

});

