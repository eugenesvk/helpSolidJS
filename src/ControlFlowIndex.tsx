import { createSignal, For }	from 'solid-js';

export default function ControlFlowIndex() { // <Index> causes less rerenders in certain situations
  // <For> uses referential equality to compare elements to the last state of the array
    // JS primitives (strings, numbers) are always compared by value, so <For> with primitive values or arrays of arrays could cause a lot of unnecessary rendering. If we used <For> to map a list of strings to <input> fields that could edit each, every change to that value would cause the <input> to be recreated.
  // <Index> is provided for these cases of working with primitives

  const [cats, setCats] = createSignal([
    { id:'J---aiyznGQ', name:'Keyboard Cat' },
    { id:'z_AbfPXTKms', name:'Maru' },
    { id:'OUtn3pvWmpg', name:'Henri The Existential Cat' }
  ]);
  const ytv = 'https://www.youtube.com/watch?v='

  // vs <For>
    // <For> cares about each piece of data in your array, and the position of that data can change
    // <Index> cares about each index in your array, and the content at each index can change.
    // 1st arg: the element (↓cat) → this is a signal `cat()`, not a string
    // 2nd arg: index       (↓i  ) → this is a number `i`
  return (
    <ul>
      <li>
        <a target="_blank" href=""                 > 1:      Manual list element: Garfield </a>
      </li>
    <Index each={cats()}>{(cat, i) =>
      <li>
        <a target="_blank" href={`${ytv}${cat().id}`}> {i+1}: &lt;Index&gt; list element: {cat().name}</a>
      </li>
    }</Index>
    </ul>
  );

}
