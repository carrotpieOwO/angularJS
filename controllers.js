  
    //첫번째 인자 이름 두번째 인자 팩토리함수
    app.controller('TodoCtrl', function($scope, todoStorage){
      
       $scope.todos = todoStorage.get();
       
 
         $scope.remove = function(todo){
             //remove 도 서비스에서 받아오기
             todoStorage.remove(todo)
           
         }
 
         $scope.add = function(newTodoTitle){
             //데이터 조작하는 부분만 service에서 넘겨받기
             todoStorage.add(newTodoTitle);
         
 
             //empty form
             $scope.newTodoTitle = '';
         }

         $scope.update = function(){
            todoStorage.update();
         }
     });