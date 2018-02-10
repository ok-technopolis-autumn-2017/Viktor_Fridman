function DataStorageConstructor() {}

var dataStorageConstructorPrototype = DataStorageConstructor.prototype;

dataStorageConstructorPrototype.quotaTry
    = function() {
    try {
        localStorage.setItem("todos", JSON.stringify(todosStructure));
    } catch (e) {
        if (e == QUOTA_EXCEEDED_ERR) {
            alert('Sorry')
        }
    }
};

dataStorageConstructorPrototype.getLocalStorage = function (key) {
    return JSON.parse(localStorage.getItem(key));
};

dataStorageConstructorPrototype.setLocalStorage = function (value) {
    var structure;

    if (localStorage.length === 0) {
        if (value.todosItem === undefined) {
            structure = {
                "todosArray": [],
                "currentFilter": value.todosFilter
            }
        } else {
            structure = {
                "todosArray": [value.todosItem],
                "currentFilter": value.todosFilter
            }
        }
    } else {
        structure = this.getLocalStorage("todos");
        if (value.todosItem !== undefined) {
            structure.todosArray.push(value.todosItem);
        }

        if (value.todosFilter !== undefined) {
            structure.currentFilter = value.todosFilter;
        }
    }

    dataStorageConstructorPrototype.quotaTry();

    structure = null;
};

dataStorageConstructorPrototype.isLocalStorageEmpty = function () {
    var structure = this.getLocalStorage("todos");

    return (structure === null);

};

dataStorageConstructorPrototype.makeAllCompletedLocalStorage = function () {
    var structure = this.getLocalStorage("todos");

    structure.todosArray = structure.todosArray.map(function (todosItem) {
        return {
            "id": todosItem.id,
            "text": todosItem.text,
            "completed": true
        }
    });

    dataStorageConstructorPrototype.quotaTry();

    structure = null;
};

dataStorageConstructorPrototype.toggleTodosLocalStorage = function(id) {
    var structure = this.getLocalStorage("todos");

    structure.todosArray = structure.todosArray.map(function (todosItem) {
        if (todosItem.id == id) {
            return {
                "id": todosItem.id,
                "text": todosItem.text,
                "completed": !todosItem.completed
            }
        }

        return todosItem
    });

    dataStorageConstructorPrototype.quotaTry();
    structure = null;
};

dataStorageConstructorPrototype.deleteTodosLocalStorage = function(id) {
    var structure = this.getLocalStorage("todos");

    structure.todosArray = structure.todosArray.filter(function (todosItem) {
        return todosItem.id != id;


    });

    dataStorageConstructorPrototype.quotaTry();

    structure = null;
};

dataStorageConstructorPrototype.deleteAllCompletedTodosLocalStorage
    = function() {

    var structure = this.getLocalStorage("todos");

    structure.todosArray = structure.todosArray.filter(function (todosItem) {
        return !todosItem.completed;


    });

    dataStorageConstructorPrototype.quotaTry();
    structure = null;
};

module.exports = DataStorageConstructor;