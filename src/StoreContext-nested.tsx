import { useCounter } from "./StoreContext-counter";

export default function Nested() {
  let r=( <>
    <div>   0</div>
    <button>+</button>
    <button>-</button>
  </>);
  const [count, { increment, decrement }] = useCounter();
  return (<>
    <div>{count()}</div>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </>);
};
