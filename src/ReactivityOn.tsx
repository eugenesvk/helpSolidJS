import { createSignal, createEffect, on }	from "solid-js";

export default function ReactivityOn() { // For convenience, Solid has an on helper that enables setting explicit dependencies for our computations. This is mostly used as a terse way to be even more explicit about which Signals are tracked (and not track any other Signals, even if they are read). In addition, on provides a defer option that allows the computation not to execute immediately and only run on first change

  const [a, setA] = createSignal(1);
  const [b, setB] = createSignal(1);

  // createEffect(()     => { console.log(a(), b()); });
  // Let's have our Effect run only when a updates, and defer execution until the value changes
  createEffect(on(a, (a) => { console.log(a  , b()); }, {defer:true}));

  return <>
    <button onClick={() => setA(a() + 1)}>Increment A</button>
    <button onClick={() => setB(b() + 1)}>Increment B</button>
  </>
}
