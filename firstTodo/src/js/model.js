

    todoItemsList = Array.from(document.getElementsByClassName('todoListItem'));
var itemsCounter = 0;
var idCounter = 0;
var isEmpty = true;
var currentFilter = 'all';

    function createTodo(input) {
    if (input.value.length === 0) return;
    itemsCounter++;
    idCounter++;
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

    todoItemsList.push(todoItem);

    pushItemToView(todoItem);
    resetInputForm(input);
}

     function generateCheckBox(ctx) {
    ctx.setAttribute('class', 'todoListItemCheck-w');
    ctx.innerHTML =
        '<input class="todoListItemCheck" id=' + idCounter + ' type="checkbox" onclick="selectItem(this.id)" aria-label="set as done">\n\n' +
        '<div class="todoListItemCheck_icon"></div>\n\n';
}

 function generateDeleteButton(ctx) {
    ctx.setAttribute('class', 'todoListItemDelete-w');
    ctx.innerHTML =
        '<button class="todoListItemDelete" id=' + idCounter + ' type="" onclick="deleteClick(this.id)" aria-label="delete item"></button>\n\n';
}

 function deleteItem(id) {
    var delItem = document.getElementById(id);
    for (var i = 0, len = todoItemsList.length; i < len; i++) {
        if (todoItemsList[i].getAttribute('id') === delItem.getAttribute("id")) {
            itemsCounter--;
            removeItemFromView(todoItemsList[i]);
            todoItemsList.splice(i, 1);
            break;
        }
    }
}

    function setSelectedToItem(id) {
    for (var i = 0, len = todoItemsList.length; i < len; i++) {
        if (todoItemsList[i].getAttribute('id') === id) {
            pushSelectedToItem(todoItemsList[i]);
        }
    }
}

 function setSelectedToAll() {
    if (itemsCounter === 0) {
        return;
    }
    for (var i = 0, len = todoItemsList.length; i < len; i++) {
        pushSelectorToItem(document.getElementById(todoItemsList[i].getAttribute('id')), 'todoListItem __ready');
    }
}

    function removeCompletedItems() {
    if (itemsCounter === 0) return;
    for (var i = 0, len = todoItemsList.length; i < len; i++) {
        if (todoItemsList[i].getAttribute('class') === 'todoListItem __ready') {
            itemsCounter--;
            // console.log(document.getElementById(todoItemsList[i].getAttribute('id')));
            removeItemFromView(document.getElementById(todoItemsList[i].getAttribute('id')));
            todoItemsList.splice(i, 1);
            i--;
            len--;
        }
    }
}

 function setFilter(filter) {
    currentFilter = filter;
    changeViewByFilter(filter);
}
