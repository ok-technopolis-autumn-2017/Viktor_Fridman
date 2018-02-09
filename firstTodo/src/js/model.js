var globalVars = require('firstTodo/src/js/GlobalVars');

 function createTodo(input) {
    if (input.value.length === 0) return;
    globalVars.itemsCounter++;
     globalVars.idCounter++;
    var todoItem = document.createElement('div'),
        textArea = document.createElement('input'),
        checkBox = document.createElement('div'),
        deleteButton = document.createElement('div');

    generateCheckBox(checkBox);
    generateDeleteButton(deleteButton);

    todoItem.setAttribute('class', 'todoListItem');
    todoItem.setAttribute('id', idCounter);

    todoItem.appendChild(checkBox);

    textArea.setAttribute('class', 'todoListItemName');
    textArea.setAttribute('value', input.value);
    todoItem.appendChild(textArea);

    todoItem.appendChild(deleteButton);

     globalVars.todoItemsList.push(todoItem);

    pushItemToView(todoItem);
    resetInputForm(input);
}

 function generateCheckBox(ctx) {
    ctx.setAttribute('class', 'todoListItemCheck-w');
    ctx.innerHTML =
        '<input class="todoListItemCheck" id=' + globalVars.idCounter + ' type="checkbox" onclick="selectItem(this.id)" aria-label="set as done">\n\n' +
        '<div class="todoListItemCheck_icon"></div>\n\n';
}

 function generateDeleteButton(ctx) {
    ctx.setAttribute('class', 'todoListItemDelete-w');
    ctx.innerHTML =
        '<button class="todoListItemDelete" id=' + globalVars.idCounter + ' type="" onclick="deleteClick(this.id)" aria-label="delete item"></button>\n\n';
}

 function   deleteItem(id) {
     var delItem = document.getElementById(id);
    for (var i = 0, len = globalVars.todoItemsList.length; i < len; i++) {
        if (globalVars.todoItemsList[i].getAttribute('id') === delItem.getAttribute("id")) {
            globalVars.itemsCounter--;
            removeItemFromView(globalVars.todoItemsList[i]);
            globalVars.todoItemsList.splice(i, 1);
            break;
        }
    }
}

function setSelectedToItem(id) {
    for (var i = 0, len = globalVars.todoItemsList.length; i < len; i++) {
        if (globalVars.todoItemsList[i].getAttribute('id') === id) {
            pushSelectedToItem(globalVars.todoItemsList[i]);
        }
    }
}

 function setSelectedToAll() {
    if (globalVars.itemsCounter === 0) {
        return;
    }
    for (var i = 0, len = globalVars.todoItemsList.length; i < len; i++) {
        pushSelectorToItem(document.getElementById(globalVars.todoItemsList[i].getAttribute('id')), 'todoListItem __ready');
    }
}

function removeCompletedItems() {
    if (globalVars.itemsCounter === 0) return;
    for (var i = 0, len = globalVars.todoItemsList.length; i < len; i++) {
        if (globalVars.todoItemsList[i].getAttribute('class') === 'todoListItem __ready') {
            globalVars.itemsCounter--;
            // console.log(document.getElementById(todoItemsList[i].getAttribute('id')));
            removeItemFromView(document.getElementById(globalVars.todoItemsList[i].getAttribute('id')));
            globalVars.todoItemsList.splice(i, 1);
            i--;
            len--;
        }
    }
}

 function setFilter(filter) {
     globalVars.currentFilter = filter;
    changeViewByFilter(filter);
}

