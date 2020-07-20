
app.factory('todoStorage', function () {
    var TODO_DATA = 'TODO_DATA'; //JS 에서 대문자로 변수 선언하면 상수라는 관습이 있음.
    var storage = {
        //todos 데이터
        todos: [

        ],

        _saveToLocalStorage: function (data) {

            localStorage.setItem(TODO_DATA, JSON.stringify(data))
        },

        _getFromLocalStorage: function () {
            //해당 키에 해당하는 데이터가 문자열로 리턴되는데 이 문자열을 객체로 바꿔서 받기
            //데이터가 없을 경우에 빈문자열 리턴
            return JSON.parse(localStorage.getItem(TODO_DATA)) || []
        },

        //컨트롤러에서 갖다 쓰기 때문에 public으로 오픈되어 있다.
        //데이터 조작 함수
        get: function () {

            angular.copy(storage._getFromLocalStorage(), storage.todos)
            return storage.todos;

        },

        remove: function (todo) {
            var idx = storage.todos.findIndex(function (item) {
                return item.title === todo.title;
            })

            if (idx > -1) {
                storage.todos.splice(idx, 1)
                storage._saveToLocalStorage(storage.todos)
            }
        },

        add: function (newTodoCategory, newTodoTitle, newTodoDate, newColor) {
            var oldCategory = storage.todos.findIndex(function (item) {
                return item.category === newTodoCategory
            })

            if (oldCategory > -1) {
                newColor = storage.todos[oldCategory].color;
            }

            //create new todos
            var newTodo = {
                category: newTodoCategory,
                color: newColor,
                title: newTodoTitle,
                completed: false,
                closingDate: newTodoDate
            }
            //push into todos
            storage.todos.push(newTodo);
            storage._saveToLocalStorage(storage.todos)
        },

        update: function () {
            storage._saveToLocalStorage(storage.todos)
        }


    }
    return storage
})

