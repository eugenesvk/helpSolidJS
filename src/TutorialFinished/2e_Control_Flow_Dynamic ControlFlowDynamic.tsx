import { Dynamic }                         	from 'solid-js/web';
import { createSignal, Switch, Match, For }	from 'solid-js';

const RedThing  	= () => <strong style="color: red"  >Red Thing  </strong>;
const GreenThing	= () => <strong style="color: green">Green Thing</strong>;
const BlueThing 	= () => <strong style="color: blue" >Blue Thing </strong>;
const options = {
  red  	: RedThing,
  green	: GreenThing,
  blue 	: BlueThing
}

export default function ControlFlowDynamic() { // <Dynamic> tag is useful when you render from data, lets you pass either a string for a native element or a component function and it will render that with the rest of the provided props, more compact than writing a number of <Show>/<Switch> components
  const [selected, setSelected] = createSignal("red");

  const return1 =(<>
    <select value={selected()} onInput={e => setSelected(e.currentTarget.value)}>
      <For each={Object.keys(options)}>{c => <option value={c}>{c}</option> }</For>
    </select>
    <Switch fallback=                     {<BlueThing  />}>
      <Match when={selected() === "red"}  ><RedThing   /></Match>
      <Match when={selected() === "green"}><GreenThing /></Match>
    </Switch>
  </>)
  return (<>
    <select value={selected()} onInput={e => setSelected(e.currentTarget.value)}>
      <For each={Object.keys(options)}>{c => <option value={c}>{c}</option> }</For>
    </select>
    <Dynamic component={options[selected()]} />
  </>);}
