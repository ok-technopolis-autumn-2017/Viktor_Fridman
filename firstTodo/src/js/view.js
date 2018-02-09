var globalVars = require('firstTodo/src/js/GlobalVars');

function resetInputForm(form) {
    form.value = '';
}

function pushItemToView(newTodoItem) {
    globalVars.todoList[0].insertBefore(newTodoItem, globalVars.todoList[0].firstChild.nextSibling);
    if (globalVars.isEmpty) {
        globalVars.mainBody[0].setAttribute('class','mainBody');
        globalVars.isEmpty = false;
    }
    globalVars.todoBottom[0].childNodes[1].childNodes[0].data = globalVars.itemsCounter + ' items left';
    changeViewByFilter(currentFilter);
}

function removeItemFromView(itemToDelete) {
    globalVars.todoList[0].removeChild(itemToDelete);
    if (globalVars.itemsCounter === 0) {
        globalVars.mainBody[0].setAttribute('class', globalVars.mainBody[0].getAttribute('class') + ' __empty');
        globalVars.isEmpty = true;
        globalVars.currentFilter = 'all';
    }
    globalVars.todoBottom[0].childNodes[1].childNodes[0].data = globalVars.itemsCounter + ' items left';
}

function pushSelectedToItem(item) {
    if(item.getAttribute('class') === 'todoListItem'){
        item.setAttribute('class', 'todoListItem __ready');
        item.childNodes[0].childNodes[0].checked = true;
    }else{
        item.setAttribute('class', 'todoListItem');
        item.childNodes[0].childNodes[0].checked = false;
    }
    changeViewByFilter(currentFilter);
}

function pushSelectorToItem(item, itemClass) {
    item.childNodes[0].childNodes[0].checked = true;
    item.setAttribute('class',itemClass);
    changeViewByFilter(currentFilter);
}

function changeViewByFilter(filter) {
    var len, i;
    if (filter === 'all') {
        globalVars.todoBottom[0].childNodes[3].childNodes[1].setAttribute('class', 'todoBottomFilter_allItems __active');
        globalVars.todoBottom[0].childNodes[3].childNodes[3].setAttribute('class', 'todoBottomFilter_activeItems');
        globalVars.todoBottom[0].childNodes[3].childNodes[5].setAttribute('class', 'todoBottomFilter_CompletedItems');
        len = globalVars.todoItemsList.length;
        for (i = 0; i < len; i++) {
            globalVars.todoItemsList[i].style.display = 'flex';
        }
    }
    if (filter === 'active') {
        globalVars.todoBottom[0].childNodes[3].childNodes[1].setAttribute('class', 'todoBottomFilter_allItems');
        globalVars.todoBottom[0].childNodes[3].childNodes[3].setAttribute('class', 'todoBottomFilter_activeItems __active');
        globalVars.todoBottom[0].childNodes[3].childNodes[5].setAttribute('class', 'todoBottomFilter_CompletedItems');
        len = globalVars.todoItemsList.length;
        for (i = 0; i < len; i++) {
            if (globalVars.todoItemsList[i].getAttribute('class') === 'todoListItem __ready') {
                globalVars.todoItemsList[i].style.display = 'none';
            } else {
                globalVars.todoItemsList[i].style.display = 'flex';
            }

        }
    }
    if (filter === 'completed') {
        globalVars.todoBottom[0].childNodes[3].childNodes[1].setAttribute('class', 'todoBottomFilter_allItems');
        globalVars.todoBottom[0].childNodes[3].childNodes[3].setAttribute('class', 'todoBottomFilter_activeItems');
        globalVars.todoBottom[0].childNodes[3].childNodes[5].setAttribute('class', 'todoBottomFilter_CompletedItems __active');
        len = globalVars.todoItemsList.length;
        for (i = 0; i < len; i++) {
            if (globalVars.todoItemsList[i].getAttribute('class') === 'todoListItem __ready') {
                globalVars.todoItemsList[i].style.display = 'flex';
            } else {
                globalVars.todoItemsList[i].style.display = 'none';
            }
        }
    }
}