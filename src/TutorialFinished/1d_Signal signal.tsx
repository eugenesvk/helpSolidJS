import { createSignal }	from "solid-js"; // values changing over time, auto update any user on change

export default function Counter() {
  let valueStart = 0;
  const [count, setCount] = createSignal(valueStart); // create a signal, returns array with 2 functions, we name them 'count'(getter) and 'setCount'(setter) by destructuring
  setInterval(() => setCount(count() + 1), 1000); // update our count signal every second (each tick we read the previous count, add 1, and set the new value)
  // return <div>Count: 0</div>;
  return <div>Count: {count()}</div>; // read the signal in our JSX code
}
