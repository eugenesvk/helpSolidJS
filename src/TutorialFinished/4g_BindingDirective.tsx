// @ts-nocheck
import { createSignal, Show }	from "solid-js";
import ClickOutside          	from "./click-outside";
import                       	     "./BindingDirective.css";

export default function BindingDirective() { // Solid supports custom directives through the use: namespace, a syntactic sugar over ref, but is useful in that it resembles typical bindings and there can be multiple bindings on the same element without conflict. This makes it a better tool for reusable DOM element behavior.
  // A custom directive is a function taking arguments (element, valueAccesor), where element is the DOM element with the use: attribute, and valueAccessor is a getter function for the value assigned to the attribute. As long as the function is imported in scope, you can use it with use:.
    // NB! use: is detected by the compiler to be transformed, and the function is required to be in scope, so it cannot be part of spreads or applied to a component.

  const [show, setShow] = createSignal(false);

  // make a wrapper for basic click-outside behavior to close a popup or modal
  // 1. we need to import and use our clickOutside directive on our element
    // <div class="modal" use:clickOutside={() => setShow(false)}> 1. Some Modal </div>
  // 2. implement in click-outside

  // let r = (
  //   <Show when={show()}
  //     fallback={<button onClick={(e) => setShow(true)}>Open Modal</button>} >
  //               <div class="modal"> Some Modal </div> </Show>
  // );
  return (
    <Show when={show()}
      fallback={<button onClick={(e) => setShow(true)}>Open Modal</button>} >
                <div class="modal" use:ClickOutside={() => setShow(false)}> Some Modal </div>
    </Show>
  );
}
