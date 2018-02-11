var model = require('./models/model/Model');
var TodosContainer = require('./componets/TodosContainer');
var FilterTypes = require('./constants/FilterTypes');

function init() {
    if (model.isEmpty()) {
        model.addTodos({
            "todo-Bottom-Filter": FilterTypes.FILTER_ALL
        })
    }

    new TodosContainer().render(model.getModel())
}

document.addEventListener('DOMContentLoaded', init);

