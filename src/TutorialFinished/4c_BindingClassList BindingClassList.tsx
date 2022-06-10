import { createSignal }	from "solid-js";
import                 	     "./BindingClassList.css";

export default function BindingClassList() { // Solid uses class to set the className property on an element. However it is often convenient to conditionally set classes => built-in classList JSX attribute that takes an object where the
  // key is the class name(s)
  // value is a boolean expression. When true, the class is applied, and when false, it is removed

  const [current, setCurrent] = createSignal("foo");

  // Can apply names dynamically like what you'd receive in CSS modules as well:
    // import { active } from "./style.module.css"
    // <div classList={{ [active]: isActive() }} />

  const r1 = (<>
    <button
      class={current() === 'foo' ? 'selected' : ''}
      onClick={() => setCurrent('foo')}>fo1o</button>
    <button
      class={current() === 'bar' ? 'selected' : ''}
      onClick={() => setCurrent('bar')}>bar</button>
    <button
      class={current() === 'baz' ? 'selected' : ''}
      onClick={() => setCurrent('baz')}>baz</button>
  </>);
  return <>
    <button
      classList={{selected: current() === 'foo'}}
      onClick={() => setCurrent('foo')}>foo</button>
    <button
      classList={{selected: current() === 'bar'}}
      onClick={() => setCurrent('bar')}>bar</button>
    <button
      classList={{selected: current() === 'baz'}}
      onClick={() => setCurrent('baz')}>baz</button>
  </>;
}
