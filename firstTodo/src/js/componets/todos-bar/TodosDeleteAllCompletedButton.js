var Observable = require('../../utils/observer/Observable');
var ActionsTypes = require('../../constants/ActionsTypes');

var TODOS_DELETE_ALL_COMPLETED_BUTTON = "todo-Bottom-clear-Done-button";

function TodosDeleteAllCompletedConstructor() {
    this.todosDelButton.addEventListener('click', this.handlerClick);
}

var todosDeleteAllCompletedConstructorPrototype =
    TodosDeleteAllCompletedConstructor.prototype;

todosDeleteAllCompletedConstructorPrototype.todosDelButton =
    document.getElementsByClassName(TODOS_DELETE_ALL_COMPLETED_BUTTON)[0];

todosDeleteAllCompletedConstructorPrototype.onChange = new Observable();

todosDeleteAllCompletedConstructorPrototype.handlerClick = function (event) {
    if (event.target.className.
        localeCompare(TODOS_DELETE_ALL_COMPLETED_BUTTON) === 0) {
        todosDeleteAllCompletedConstructorPrototype.onChange.deliver({
            "type": ActionsTypes.DELETE_ALL_COMPLETED_TODOS
        });
    }
};

module.exports = new TodosDeleteAllCompletedConstructor();