import { createSignal, For }	from 'solid-js';

export default function ControlFlowFor() { // <For> component is the best way to loop over an array of objects.  As the array changes, <For> updates or moves items in the DOM rather than recreating them
  const [cats, setCats] = createSignal([
    { id:'J---aiyznGQ', name:'Keyboard Cat' },
    { id:'z_AbfPXTKms', name:'Maru' },
    { id:'OUtn3pvWmpg', name:'Henri The Existential Cat' }
  ]);
  const ytv = 'https://www.youtube.com/watch?v='

  // one prop on the <For> component: each, where you pass the array to loop over
  // instead of writing nodes directly between <For> and </For>, you pass a callback (a function similar to JavaScript's map callback)
  // For each element in the array, the callback is called:
  // 1st arg: the element (↓cat)
  // 2nd arg: index       (↓i  ) → this is a signal `i()`, not a number
    // because <For> is "keyed by reference": each node that it renders is coupled to an element in the array. In other words, if an element changes placement in the array, rather than being destroyed and recreated, the corresponding node will move too and its index will change
  // You can then make use of those in the callback, which should return a node to be rendered
  // Iterable objects → arrays: utils Array.from, Object.keys, or spread syntax
  return (
    <ul>
      <li>
        <a target="_blank" href=""                 > 1:      Manual list element: Garfield </a>
      </li>
    <For each={cats()}>{(cat, i) =>
      <li>
        <a target="_blank" href={`${ytv}${cat.id}`}> {i()+1}: &lt;For&gt; list element: {cat.name} </a>
      </li>
    }</For>
    </ul>
  );

}
