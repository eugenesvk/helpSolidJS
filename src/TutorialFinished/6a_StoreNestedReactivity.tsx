import { createSignal, For }	from "solid-js";

export default function StoreNestedReactivity() { // Solid can handle nested updates independently: You can have a list of users and when we update one name we only update a single location in the DOM without diffing the list itself. Very few (even reactive) UI frameworks can do this.
  // But how do we accomplish this? In the example we have a list of todos in a signal. In order to mark a todo as complete, we would need to replace the todo with a clone. This is how most frameworks work, but it's wasteful as we rerun the list diffing and we recreate the DOM elements as illustrated in the console.log

  const [todos, setTodos] = createSignal([])
  let input;
  let todoId = 0;

  const addTodo1   = (txt)=>{setTodos([...todos(), {id:++todoId, txt, completed:false }]); }
  const toggleTodo1= (id) =>{setTodos(todos().map(
    (todo) => (todo.id !== id ? todo : { ...todo, completed: !todo.completed }))); }
  // 1 Instead, in a fine-grained Solid, we initialize the data with nested Signals like this:
  const addTodo    = (txt)=>{ const [completed, setCompleted] = createSignal(false);
                              setTodos([...todos(), {id:++todoId, txt, completed, setCompleted }]);};
  // 2 Now we can update the completion state by calling setCompleted without any additional diffing because we've moved the complexity to the data rather than the view. And we know exactly how the data changes
  const toggleTodo = (id) => {
    const index = todos().findIndex((t) => t.id === id);
    const todo  = todos()[index];
    if (todo) todo.setCompleted(!todo.completed())
  }

  // 3 change the remaining references of todo.completed to todo.completed(), the example should now only run the console.log on creation and not when you toggle a todo
  //        checked  ={todo.completed}
  //      <span style={{"text-decoration": todo.completed ? "line-through" : "none"}}>{text}</span>
  return (<>
    <div>
      <input ref={input} />
      <button onClick={(e) => {
        if (!input.value.trim()) return;
        addTodo(input.value);
        input.value = "";
        }}>
        Add Todo </button>
    </div>
    <For each={todos()}>
      {(todo) => {
        const { id, txt } = todo;
        console.log(`Creating ${txt}`)
        return <div>
          <input type="checkbox"
            checked  ={todo.completed()}
            onchange ={[toggleTodo, id]} />
          <span style={{"text-decoration": todo.completed() ? "line-through" : "none"}}>{txt}</span>
        </div> }}
    </For>
  </>);
}
