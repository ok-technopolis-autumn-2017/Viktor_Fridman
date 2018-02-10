var addTodosToModel = require('../modules/view-models/AddTodosToModel');
var makeAllCompletedTodosToModel = require(
    '../modules/view-models/MakeAllCompletedTodosToModel');
var toggleTodosToModel = require('../modules/view-models/ToggleTodosToModel');
var deleteTodosToModel = require('../modules/view-models/DeleteTodosToModel');
var setTodosFilterToModel = require(
    '../modules/view-models/SetTodosFilterToModel');
var deleteAllCompletedTodosToModel = require(
    '../modules/view-models/DeleteAllCompletedTodosToModel');

var AddTodos = require('./add-todos/AddTodos');
var TodosList = require('./todos_list/TodosList');
var TodosBar = require('./todos-bar/TodosBar');

function TodosContainerConstructor() {
    this.render.subscribe(addTodosToModel.onUpdateModel);
    this.render.subscribe(makeAllCompletedTodosToModel.onUpdateModel);
    this.render.subscribe(toggleTodosToModel.onUpdateModel);
    this.render.subscribe(deleteTodosToModel.onUpdateModel);
    this.render.subscribe(setTodosFilterToModel.onUpdateModel);
    this.render.subscribe(deleteAllCompletedTodosToModel.onUpdateModel);
}

var TodosContainerConstructorPrototype = TodosContainerConstructor.prototype;

TodosContainerConstructorPrototype.render = function (currentModel) {
    console.log(currentModel);
    AddTodos.setVisibility(currentModel.todosArray.length);
    TodosList.render(currentModel);
    TodosBar.render(currentModel.todosArray, currentModel.currentFilter);
};

module.exports = TodosContainerConstructor;