let nextTodoId = 0;
export default {
  addTodo   	: txt => ({ type:"ADD_TODO"   , id:++nextTodoId, txt }),
  toggleTodo	: id  => ({ type:"TOGGLE_TODO", id })
};
