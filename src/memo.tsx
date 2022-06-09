import { createSignal, createMemo } from 'solid-js';

function fibonacci(num) {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

// cache values to reduce duplicated work: memos evaluate a function and store the result until its dependencies change. Great for caching calculations for effects that have other dependencies and mitigating the work required for expensive operations like DOM node creation
// Memos are both an observer, like an effect, and a read-only signal. Since they are aware of both their dependencies and their observers, they can ensure that they run only once for any change. This makes them preferable to registering effects that write to signals. Generally, what can be derived, should be derived

export default function FibCounter() {
  let valueStart = 10;
  const [count, setCount]	= createSignal(valueStart);
  const fib_1preMemo     	=            () => fibonacci(count()) ;
  const fib_2Memo        	= createMemo(() => fibonacci(count()));
  const fib              	= createMemo(() => {
    console.log("@fib Calculating Fibonacci"); // write to console to confirm how often it runs
                                      return fibonacci(count());
  });
  return (
    <>
      <button onClick={() => setCount(count() + 1)}>FibCount: {count()}</button>
      <div>_1. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
      <div>_2. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
      <div>_3. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
      <div>_4. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
      <div>_5. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
      <div>_6. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
      <div>_7. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
      <div>_8. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
      <div>_9. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
      <div>10. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
    </>
  );
}
