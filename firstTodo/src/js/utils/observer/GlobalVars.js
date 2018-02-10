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

module.exports = GlobalVars;

