// @ts-nocheck
import { createStore } from 'redux';

const todos = (state = { todos: [] }, action) => { // todos reducer
  switch (action.type) {
    case "ADD_TODO":
      return { todos: [
        ...state.todos,
        { id       	: action.id,
          txt      	: action.txt,
          completed	: false }
      ]};
    case "TOGGLE_TODO":
      return { todos: state.todos.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )};
    default:
      return state;
  }
};

export default createStore(todos);
