import counter	from "./StoreNoContext-counter";

export default function StoreNoContext() { //Context is a great tool for stores. It handles injection, ties ownership to the reactive graph, automatically manages disposal, and has no render overhead given Solid's fine-grained rendering.
  // Sometimes context is overkill, though; an alternative is to use the reactive system directly. For example, we can build a global reactive data store by creating a signal in a global scope, and exporting it for other modules to use
    // import { createSignal } from 'solid-js';
    // export default createSignal(0);
    // somewhere else:
    // import counter from './counter';
    // const [count, setCount] = counter;
  // Solid's reactivity is a universal concept. It doesn't matter if it is inside or outside components. There is no separate concept for global vs local state. It is all the same thing.
  // The only restriction is that all computations (Effects/Memos) need to be created under a reactive root (createRoot). Solid's render does this automatically.
  // counter.tsx is such a global store
  // We can use it by modifying our component in main.tsx to:
  let r1= (
    <button type="button">
      0 0
    </button>
  );
  // So when using your own more complicated global stores that contain computations, be sure to create a root. Or better yet, do yourself a favor and just use Context.

  const { count, doubleCount, increment } = counter;
  return (
    <button type="button" onClick={increment}>
      {count()} {doubleCount()}
    </button>
  );
}
