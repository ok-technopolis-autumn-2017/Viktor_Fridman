function selectItem(id) {
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
    removeCompletedItems();
}

