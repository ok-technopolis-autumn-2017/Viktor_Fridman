var Observable = require('../../utils/observer/Observable');
var AddTodos = require('../../componets/add-todos/AddTodos');
var ActionsTypes =require('../../constants/ActionsTypes');

function MakeAllCompletedTodosToModel() {
    this.getNewModelState.subscribe(AddTodos.onChange)
}

var makeAllCompletedTodosToModelPrototype
    = MakeAllCompletedTodosToModel.prototype;

makeAllCompletedTodosToModelPrototype.model = require('../model/Model');

makeAllCompletedTodosToModelPrototype.onUpdateModel = new Observable();

makeAllCompletedTodosToModelPrototype.getNewModelState = function(value) {
    if (value.type.localeCompare(ActionsTypes.MAKE_ALL_COMPLETED_TODOS) == 0) {
        var currentModel = makeAllCompletedTodosToModelPrototype.model.makeAllCompleted();

        makeAllCompletedTodosToModelPrototype.onUpdateModel.deliver(currentModel);

        currentModel = null;
    }
};

module.exports = new MakeAllCompletedTodosToModel();