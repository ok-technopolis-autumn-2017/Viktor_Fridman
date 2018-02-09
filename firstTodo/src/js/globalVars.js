
var mainBody = document.getElementsByClassName('main-Body');
var todoList = document.getElementsByClassName('todo-List');
var todoBottom = document.getElementsByClassName('todo-Bottom');

var todoItemsList = Array.from(document.getElementsByClassName('todoListItem'));
var itemsCounter = 0;
var idCounter = 0;
var isEmpty = true;
var currentFilter = 'all';

 function addElement(event) {
     var inputForm = document.getElementsByClassName("add-String")[0];
     if (event.keyCode===13){
        console.log("sdfsdfsdfsdfsdf");
        createTodo(inputForm);
     }
}

