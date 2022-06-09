import { createSignal }	from "solid-js"; // values changing over time, auto update any user on change
import { createEffect } from 'solid-js'; // Effects that developers create with createEffect run after rendering has completed and are mostly used for scheduling updates that interact with the DOM. If you want to modify the DOM earlier, use createRenderEffect.

export default function Counter() {
  let valueStart = 0;
  const [count, setCount] = createSignal(valueStart); // create a signal, returns array with 2 functions, we name them 'count'(getter) and 'setCount'(setter) by destructuring
  setInterval(() => setCount(count() + 1), 1000); // update our count signal every second (each tick we read the previous count, add 1, and set the new value)

  const doubleCount = () => count() * 2; // derived signal, depends on signals by wrapping a signal in a function, thus becoming effectively also a signal

  createEffect(() => { // effect auto subscribes to any signal that is read during the function's execution and reruns when any of them change
    console.log("The count is now", count());
  });

  // return <div>Count: 0</div>;
  return <div>Count: {count()} <br />
    doubleCount: {doubleCount()} <br />
    <button onClick={() => setCount(count() + 1)}>Click Me to increment count</button>
  </div>; // read the signal in our JSX code
}
