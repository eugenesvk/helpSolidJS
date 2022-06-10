import { mergeProps } from "solid-js";

export default function Greeting(props) {
  // in greetings.tsx, we inlined the defaults in the template,
  let r1 = <h3>{props.greeting || "NoGreetPassed"} {props.name || "NoNamePassed"}</h3>
  // but we could also use mergeProps to keep reactive updates even when setting defaults:
  const merged = mergeProps({ greeting:"NoGreetPassed", name:"NoNamePassed" }, props);
  return <h3>{merged.greeting} {merged.name}</h3>
}
