import { splitProps } from "solid-js";

export default function Greeting(props) {
  const { greeting,name,...others1 } = props;                  	// Lose reactivity on destructure
  const [local,others] = splitProps(props,["greeting","name"]);	// Maintain reactivity with splitProps
    // arg1 props = props object
    // arg2 ["greeting","name"] = an array of keys that we want to extract into their own props objects
    // returns an array of props objects
      // local  = one per array of specified keys
      // others = one props object with any remaining keys
    // All returned objects preserve reactivity

  let r =<h3 {...others1}>      {greeting}       {name}</h3>
  return <h3 {...others }>{local.greeting} {local.name}</h3>
}
