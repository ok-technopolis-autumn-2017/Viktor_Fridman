var Observable = require('../../utils/observer/Observable');
var TodosFilters = require('../../componets/todos-bar/TodosFilters');
var ActionsTypes =require('../../constants/ActionsTypes');

function SetTodosFilterToModel() {
    this.getNewModelState.subscribe(TodosFilters.onChange);
}

var setTodosFilterToModelPrototype = SetTodosFilterToModel.prototype;

setTodosFilterToModelPrototype.model = require('../model/Model');

setTodosFilterToModelPrototype.onUpdateModel = new Observable();

setTodosFilterToModelPrototype.getNewModelState = function(value) {
    if (value.type.localeCompare(ActionsTypes.SET_VISIBILITY_FILTER) == 0) {
        var currentModel = setTodosFilterToModelPrototype.model.addTodos({
            "todosFilter": value.filter
        });
        setTodosFilterToModelPrototype.onUpdateModel.deliver(currentModel);

        currentModel = null;
    }
};

module.exports = new SetTodosFilterToModel();