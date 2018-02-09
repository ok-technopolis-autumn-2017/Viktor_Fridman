function resetInputForm(form) {
    form.value = '';
}

function pushItemToView(newTodoItem) {
    todoList[0].insertBefore(newTodoItem, todoList[0].firstChild.nextSibling);
    if (isEmpty) {
        mainBody[0].setAttribute('class','mainBody');
        isEmpty = false;
    }
    todoBottom[0].childNodes[1].childNodes[0].data = itemsCounter + ' items left';
    changeViewByFilter(currentFilter);
}

function removeItemFromView(itemToDelete) {
    todoList[0].removeChild(itemToDelete);
    if (itemsCounter === 0) {
        mainBody[0].setAttribute('class', mainBody[0].getAttribute('class') + ' __empty');
        isEmpty = true;
        currentFilter = 'all';
    }
    todoBottom[0].childNodes[1].childNodes[0].data = itemsCounter + ' items left';
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
    // console.log(todoBottom[0].childNodes[3].childNodes[1]);
    var len, i;
    if (filter === 'all') {
        todoBottom[0].childNodes[3].childNodes[1].setAttribute('class', 'todoBottomFilter_allItems __active');
        todoBottom[0].childNodes[3].childNodes[3].setAttribute('class', 'todoBottomFilter_activeItems');
        todoBottom[0].childNodes[3].childNodes[5].setAttribute('class', 'todoBottomFilter_CompletedItems');
        len = todoItemsList.length;
        for (i = 0; i < len; i++) {
            todoItemsList[i].style.display = 'flex';
        }
    }
    if (filter === 'active') {
        todoBottom[0].childNodes[3].childNodes[1].setAttribute('class', 'todoBottomFilter_allItems');
        todoBottom[0].childNodes[3].childNodes[3].setAttribute('class', 'todoBottomFilter_activeItems __active');
        todoBottom[0].childNodes[3].childNodes[5].setAttribute('class', 'todoBottomFilter_CompletedItems');
        len = todoItemsList.length;
        for (i = 0; i < len; i++) {
            if (todoItemsList[i].getAttribute('class') === 'todoListItem __ready') {
                todoItemsList[i].style.display = 'none';
            } else {
                todoItemsList[i].style.display = 'flex';
            }

        }
    }
    if (filter === 'completed') {
        todoBottom[0].childNodes[3].childNodes[1].setAttribute('class', 'todoBottomFilter_allItems');
        todoBottom[0].childNodes[3].childNodes[3].setAttribute('class', 'todoBottomFilter_activeItems');
        todoBottom[0].childNodes[3].childNodes[5].setAttribute('class', 'todoBottomFilter_CompletedItems __active');
        len = todoItemsList.length;
        for (i = 0; i < len; i++) {
            if (todoItemsList[i].getAttribute('class') === 'todoListItem __ready') {
                todoItemsList[i].style.display = 'flex';
            } else {
                todoItemsList[i].style.display = 'none';
            }
        }
    }
}