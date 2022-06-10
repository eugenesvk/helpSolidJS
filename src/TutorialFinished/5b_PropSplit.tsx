import { createSignal }	from "solid-js";
import Greeting        	from "./greetingSplit";


export default function PropSplitting() { // Often, we want to split props into groups, so that we can use some of them on the current component but split off others to pass through to child components.
  // splitProps: takes
    // props object and
    // one or more arrays of keys that we want to extract into their own props objects
    // returns an array of props objects, one per array of specified keys, plus one props object with any remaining keys. All returned objects preserve reactivity

  const [name, setName] = createSignal("DefName");
  return <>
    <Greeting greeting="DefGreet" name={name()} style="color: teal;" />
    <button onClick={() => setName("Jarod")}>Set Name</button>
  </>;
}
