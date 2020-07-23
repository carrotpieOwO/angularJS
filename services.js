app.factory('todoStorage', function () {
    const TODO_DATA = 'TODO_DATA'; 
    const storage = {
        //todos 데이터
        todos: [],

        //service 내에서 외부에서 감춰줘야 하는 경우 (컨트롤러에서 사용할 수 없음, 오직 서비스내에서만 사용)
        _saveToLocalStorage: function (data) {
            localStorage.setItem(TODO_DATA, JSON.stringify(data)) 
        },
        
        _getFromLocalStorage: function () {
            //데이터가 없을 경우에 빈문자열 리턴
            return JSON.parse(localStorage.getItem(TODO_DATA)) || []
        },

        //데이터 조작 함수
        get: function () {
            return new Promise((resolve)=>{
                //storage.todos = storage._getFromLocalStorage();
                angular.copy(storage._getFromLocalStorage(), storage.todos);         
                setTimeout(()=>{
                    resolve( storage.todos)
                },3000)
            })
        },

        remove: function (todo) {
            var idx = storage.todos.findIndex( item => item.title === todo.title);

            if (idx > -1) {
                storage.todos.splice(idx, 1)
                storage._saveToLocalStorage(storage.todos)
            }
        },

        add: function (newTodoCategory, newTodoTitle, newTodoDate, newColor) {
        
            if(newTodoCategory === '' || newTodoCategory === undefined){
                newTodoCategory = '기타'
            }

            var idx = storage.todos.findIndex(item => item.category === newTodoCategory)

            if (idx > -1) {
                newColor = storage.todos[idx].color;
            }

            if(newTodoDate === '' || newTodoDate === undefined ){
                newTodoDate = new Date().toLocaleDateString();
            }
 
            console.log(newTodoCategory, newTodoDate, newTodoTitle, newColor);
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