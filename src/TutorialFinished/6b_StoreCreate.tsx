import { For, createSignal }	from "solid-js";
import { createStore }      	from "solid-js/store";

export default function StoreCreate() { // Stores are Solid's answer to nested reactivity: they are proxy objects whose properties can be tracked and can contain other objects which automatically become wrapped in proxies themselves, and so on
  // To keep things light, Solid creates underlying Signals only for properties that are accessed under tracking scopes. And so, all Signals in Stores are created lazily as requested.
  // The createStore call takes the initial value and returns a read/write tuple similar to Signals
    // 1st element is the store proxy which is readonly
    // 2nd         is a setter function, in its most basic form takes an object whose properties will be merged with the current state. It also supports path syntax so that we can do nested updates. In this way we can still maintain control of our reactivity but do pinpoint updates.
  // Solid's path syntax has many forms and includes some powerful syntax to do iteration and ranges. Refer to the API documentation for a full reference.


  let input;
  let todoId = 0;
  const [todos1, setTodos1] = createSignal([])
  const addTodo1   = (txt)=>{setTodos1([...todos1(), {id:++todoId, txt, completed:false }]); }
  const toggleTodo1= (id) =>{setTodos1(todos1().map(
    (todo) => (todo.id !== id ? todo : { ...todo, completed: !todo.completed }))); }
  // 1 much easier to achieve nested reactivity with a Store
  const [todos, setTodos]  = createStore([]);
  const addTodo    = (txt)=>{setTodos ([...todos   , { id:++todoId, txt, completed:false }]);};
  const toggleTodo = (id) =>{setTodos (
      (todo) => todo.id === id,
      "completed",
      (completed) => !completed
    ); };


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
    <For each={todos}>
      {(todo) => {
        const { id, txt } = todo;
        console.log(`Creating ${txt}`)
        return <div>
          <input type="checkbox"
            checked  ={todo.completed}
            onchange ={[toggleTodo, id]} />
          <span style={{"text-decoration": todo.completed ? "line-through" : "none"}}>{txt}</span>
        </div> }}
    </For>
  </>);
}
