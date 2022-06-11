// @ts-nocheck
import { render }	from "solid-js/web";
import { For }   	from "solid-js";
import useRedux  	from "./StoreImmutable-useRedux";
import reduxStore	from "./StoreImmutable-store";
import actions   	from "./StoreImmutable-actions";

export default function StoreImmutable() { //Stores are most often created in Solid using Solid's Store proxies. Sometimes we wish to interface with immutable libraries like Redux, Apollo, or XState and need to perform granular updates against these.
  // In the example, we have a basic wrapper around Redux. You can see the implementation in useRedux.tsx. The definition of the store and the actions are in the remaining files.
  // The core behavior is that we created a Store object and subscribe to the Redux store to update state on update (@useRedux.tsx)
  // However, the rendering is inefficient. Notice the console.log not only on create but whenever you check the box: Solid doesn't diff by default. It assumes the new item is new and replaces it. If your data changes granularly, you don't need to diff. But what if you do?
  // Solid provides a diffing method reconcile that enhances the setStore call and lets us diff the data from these immutable sources, only notifying the granular updates.
  // This isn't the only way to solve this and you've seen some frameworks have a key property on their template loop flows. The problem is that by making that a default part of the templating, you always need to run list reconciliation and always have to diff all the children for potential changes, even in compiled frameworks. A data-centric approach not only makes this applicable outside of templating but makes it opt in. When you consider that internal state management doesn't need this, it means we default to having the best performance.

  const [store, { addTodo, toggleTodo }] = useRedux( reduxStore, actions );
  let input;

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
    <For each={store.todos}>
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
