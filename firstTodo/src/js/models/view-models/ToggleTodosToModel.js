var Observable = require('../../utils/observer/Observable');
var TodosList = require('../../componets/todos_list/TodosList');
var ActionsTypes =require('../../constants/ActionsTypes');

function ToggleTodosToModel() {
    this.getNewModelState.subscribe(TodosList.onChange);
}

var toggleTodosToModelPrototype = ToggleTodosToModel.prototype;

toggleTodosToModelPrototype.model = require('../model/Model');

toggleTodosToModelPrototype.onUpdateModel = new Observable();

toggleTodosToModelPrototype.getNewModelState = function(value) {
    if (value.type.localeCompare(ActionsTypes.TOGGLE_TODOS) == 0) {
        var currentModel = toggleTodosToModelPrototype.model.toggleItem(value.id);
        toggleTodosToModelPrototype.onUpdateModel.deliver(currentModel);

        currentModel = null;
    }
};

module.exports = new ToggleTodosToModel();