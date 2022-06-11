import { createSignal, createEffect, untrack }	from "solid-js";

export default function ReactivityUntrack() { // It's sometimes desirable to have Signal reads not be tracked, even inside a reactive context. Solid provides the untrack helper as a way to prevent the wrapping computation from tracking any reads
  // Let's suppose we did not want to log in our example when b changes.

  const [a, setA] = createSignal(1);
  const [b, setB] = createSignal(1);

  // createEffect(()=>{console.log(a(),         b()); });
  // We can untrack the b signal by changing our effect to the following
  createEffect(() => { console.log(a(), untrack(b));});
  // Since Signals are functions, they can be passed directly, but untrack can wrap functions with more complex behavior
  // Even though untrack disables tracking of reads, it has no effect on writes which still happen and notify their observers.

  return <>
    <button onClick={() => setA(a() + 1)}>Increment A</button>
    <button onClick={() => setB(b() + 1)}>Increment B</button>
  </>
}
