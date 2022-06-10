import { createEffect, children } from "solid-js";

export default function ColoredList(props) {
  let r1=<>{props.children}</> // If we interacted with props.children directly, not only would we create the nodes multiple times, but we'd find props.children to be a function, the Memo returned from <For>
  const c = children(() => props.children); // Instead let's use the children helper
  createEffect(() => c().forEach(item => item.style.color = props.color)); // Effect to update our elements
  return <>{c()}</>
}
