var TODOS_MAIN_SELECTOR = '.js-main-Body';

function TodoMainConstructor() {
    this._todosMain = document.querySelector(TODOS_MAIN_SELECTOR);
}

var todoMainComponentConstructorPrototype = TodoMainConstructor.prototype;

module.exports = TodoMainConstructor;