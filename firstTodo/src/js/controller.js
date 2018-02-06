function addItem(event){
    if(event.keyCode === 13) {
        var inputForm = document.getElementsByClassName("add-String");
        createTodo(inputForm[0]);
    }
}

function selectItem(id) {
    console.log('Selecting item');
    setSelectedToItem(id);
}

function selectAll() {
    setSelectedToAll();
}

function deleteClick(id) {
    deleteItem(id);
}

function filterAll() {
    setFilter('all');
}

function filterActive() {
    setFilter('active');
}

function filterCompleted() {
    setFilter('completed');
}

function clearCompleted() {
    console.log('Remove completed items');
    removeCompletedItems();
}