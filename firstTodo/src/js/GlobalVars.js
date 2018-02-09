var GlobalVars = {
    mainBody: document.getElementsByClassName('main-Body'),
    todoList: document.getElementsByClassName('todo-List'),
    todoBottom: document.getElementsByClassName('todo-Bottom'),

    todoItemsList: Array.from(document.getElementsByClassName('todoListItem')),
    itemsCounter: 0,
    idCounter: 0,
    isEmpty: true,
    currentFilter: 'all'
};
 function addElement(event) {
     var inputForm = document.getElementsByClassName("add-String")[0];
     if (event.keyCode===13){
        console.log("sdfsdfsdfsdfsdf");
        createTodo(inputForm);
     }
}

module.exports = GlobalVars;

