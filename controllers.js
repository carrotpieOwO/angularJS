// app.run(function ($http) {
//   $http.get("http://localhost:5000/list").success(function (data) {
//     $scope.todo = data;
//   });
// });
//모듈 안에 컨트롤러 만들기
//컨트롤러 이름 정하기.
//컨트롤러에서 서비스(todoStorage) 주입 : 컨트롤러 역할만 수행해서 가독성을 높이기 위함
app.controller("TodoCtrl", function ($scope, $http) {
  //function 파라미터로 $scope 변수를 넣어주면, 컨트롤러 안에서 $scope을 사용할 수 있다.
  //$scope : 컨트롤러와 html 파일 간의 연결고리 역할을 한다.
  // $scope.name ='ha0' 하고, html에서 ng-controller='사용할컨트롤러이름'속성 주고,
  // 자식요소에서 표현식으로 {{name}} 하면 컨트롤러의 변수 사용 가능
  //서비스에서 데이터
  $http({
    method: "GET",
    url: "http://localhost:5000/list",
  }).then(function (response) {
    $scope.todo = response;
  }),
    function (error) {
      console.log(error, "failed");
    };

  $scope.list = function () {
    $http.get("http://localhost:5000/list").success(function (datas) {
      $scope.todos = datas;
      console.log($scope.todos);
    });
  };
  //       $scope.todos = todoStorage.get();

  $scope.incompleteCount = function () {
    var count = 0;
    angular.forEach($scope.todos, function (todo) {
      if (!todo.completed) {
        count++;
      }
    });
    return count;
  };

  $scope.warningLevel = function () {
    return $scope.incompleteCount() < 3 ? "badge-success" : "badge-danger";
  };
  // var date = new Date().toString();
  //  $scope.todos = [
  //      {
  //          title: '요가',
  //          completed: false,
  //          createdAt: Date.now()
  //      },
  //      {
  //          title: '앵귤러학습',
  //          completed: false,
  //          createdAt: Date.now()
  //      },
  //      {
  //          title: '운동하기',
  //          completed: true,
  //          createdAt: Date.now()
  //      }
  //  ]

  $scope.remove = function (todo) {
    //remove 도 서비스에서 받아오기
    todoStorage.remove(todo);
    //  var idx = $scope.todos.findIndex(function (item){
    //      return item.title === todo.title;
    //  })

    //  if(idx > -1){
    //      $scope.todos.splice(idx, 1)
    //  }
  };

  $scope.add = function (newTodoTitle) {
    //데이터 조작하는 부분만 service에서 넘겨받기
    //  $http.post('http://localhost:5000/add', todo).success(function(){
    //      $scope.todos.push(newTodoTitle)
    //  })
    todoStorage.add(newTodoTitle);

    //create new todos
    //  var newTodo = {
    //      title: newTodoTitle,
    //      completed: false,
    //      createdAt: Date.now()
    //  }
    //push into todos
    //$scope.todos.push(newTodo);

    //empty form
    $scope.newTodoTitle = "";
  };

  $scope.update = function () {
    todoStorage.update();
  };
});
