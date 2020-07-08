//서비스 함수 (서비스를 정의하는 방법의 차이가 있음, 결과는 같음)
//오직 데이터만 관리하는 역할 수행
//service
//factory ('서비스이름', 함수)
//provider 

//todo 데이터 관리하는 서비스
//컨트롤러에서 주입해서 사용
//storage라는 키 안에는 todos라는 객체와 get함수가 담겨있음
app.factory('todoStorage', function(){
    var TODO_DATA = 'TODO_DATA'; //JS 에서 대문자로 변수 선언하면 상수라는 관습이 있음.
    var storage = {
        //todos 데이터
        todos : [
            // {   
            //     title: '요가',
            //     completed: false,
            //     createdAt: Date.now()
            // },
            // {   
            //     title: '앵귤러학습',
            //     completed: false,
            //     createdAt: Date.now()
            // },
            // {   
            //     title: '운동하기',
            //     completed: true,
            //     createdAt: Date.now()
            // }
        ],

        //변수명, 함수명 지정 시 _로 시작하는 것은 private
        //외부에서 사용불가 (ex. 컨트롤러에서 사용 불가) service내에서만 접근 가능
        //강제성은 없고 js의 관습임
        _saveToLocalStorage: function(data){
            //key, value 넣어주기
            //localStorage에서 입력은 모두 문자열로 처리해야하기 때문에 객체배열인 data를 문자열화해주기
            localStorage.setItem(TODO_DATA, JSON.stringify(data))
        },

        _getFromLocalStorage: function(){
            //해당 키에 해당하는 데이터가 문자열로 리턴되는데 이 문자열을 객체로 바꿔서 받기
            //데이터가 없을 경우에 빈문자열 리턴
           return JSON.parse(localStorage.getItem(TODO_DATA)) || []
        },

        //컨트롤러에서 갖다 쓰기 때문에 public으로 오픈되어 있다.
        //데이터 조작 함수
        get: function(){
          //  storage.todos = storage._getFromLocalStorage()
          // 이거보다 copy 사용하는게 좋음
          // view와 연결된 data를 자동으로 refresh해주는 기능이 있음 : digest cycle 이라고함
          // 이 사이클에 맞게 작성하려면 앵귤러에서 제공하는 메소드를 사용해야함. 그중 하나가 angular.copy
          // 객체나 array를 복사할때는 단순히 할당문을 사용하는게 아니라 angular.copy 사용하는게 좋음 
            angular.copy(storage._getFromLocalStorage(), storage.todos)
            return storage.todos;

        },

        remove: function(todo){
            var idx = storage.todos.findIndex(function (item){
                return item.title === todo.title;
            })

            if(idx > -1){
                storage.todos.splice(idx, 1)
                storage._saveToLocalStorage(storage.todos)
            }
        },

        add: function(newTodoTitle){
              //create new todos
              var newTodo = {
                title: newTodoTitle,
                completed: false,
                createdAt: Date.now()
            }
            //push into todos
            storage.todos.push(newTodo);
            storage._saveToLocalStorage(storage.todos)
        },

        update: function() {
            storage._saveToLocalStorage(storage.todos)
        }

        
    }
    return storage
})

