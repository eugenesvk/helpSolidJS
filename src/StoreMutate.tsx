import { For, createSignal }   	from "solid-js";
import { createStore, produce }	from "solid-js/store";

export default function StoreCreate() { // Best to use shallow immutable patterns for updating state. By separating reads and writes we maintain better control over the reactivity of our system without the risk of losing track of changes to our proxy when passed through layers of components. This is much more amplified with Stores compared to Signals.
  // Sometimes, however, mutation is just easier to reason about. That's why Solid provides an Immer inspired produce store modifier that allows you to mutate a writable proxy version of your Store object inside your setStore calls.
  // While produce with Stores probably handles the vast majority of cases, Solid also has a mutable Store object that is available from createMutable. While not the recommended approach for internal APIs, it is sometimes useful for interop or compatibility with 3rd party systems

  let input;
  let todoId = 0;
  const [todos1, setTodos1] = createSignal([])
  const addTodo1   = (txt)=>{setTodos1([...todos1(), {id:++todoId, txt, completed:false }]); }
  const toggleTodo1= (id) =>{setTodos1(todos1().map(
    (todo) => (todo.id !== id ? todo : { ...todo, completed: !todo.completed }))); }
  // 1 much easier to achieve nested reactivity with a Store
  const [todos2, setTodos2]  = createStore([]);
  const addTodo2   = (txt)=>{setTodos2 ([...todos2   , { id:++todoId, txt, completed:false }]);};
  const toggleTodo2= (id) =>{setTodos2 (
    (todo) =>  todo.id === id, "completed", (completed) => !completed); };
  // when mutation is necessary, using
  const [todos, setTodos]  = createStore([]);
  const addTodo    = (txt)=>{setTodos (produce(
    (todos) => {todos.push({ id:++todoId, txt, completed:false });}));};
  const toggleTodo = (id) =>{setTodos(
    (todo) => todo.id === id,produce((todo) => (todo.completed = !todo.completed)));};

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
