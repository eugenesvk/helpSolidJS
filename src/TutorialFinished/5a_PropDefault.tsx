// @ts-nocheck
import { createSignal }	from "solid-js";
import Greeting        	from "./greeting";


export default function BindingDirective() { // Props: the object that is passed to our component function on execution that represents all the attributes bound to its JSX
  // Props are readonly and have reactive properties which are wrapped in Object getters
  // This allows them to have a consistent form regardless of whether the caller used signals, signal expressions, or static values. You access them by props.propName
  // NB! DO NOT just destructure props objects, as that would lose reactivity if not done within a tracking scope. In general accessing properties on the props object outside of Solid's primitives or JSX can lose reactivity. This applies not just to destructuring, but also to spreads and functions like Object.assign.
  // Solid has a few utilities to help us when working with props
    // mergeProps, which merges potentially reactive objects together (like a nondestructive Object.assign) without losing reactivity. The most common case is when setting default props for our components.
  // in greetings.tsx, we inlined the defaults in the template, but we could also use mergeProps to keep reactive updates even when setting defaults:

  const [name, setName] = createSignal();

  return <>
    <Greeting greeting	="Hello" />
    <Greeting name    	="Jeremy" />
    <Greeting name    	={name()} />
    <button onClick={() => setName("Jarod")}>Set Name</button>
  </>;
}
