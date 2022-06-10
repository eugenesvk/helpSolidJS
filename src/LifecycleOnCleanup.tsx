import { createSignal, onCleanup }	from "solid-js";

export default function LifecycleOnCleanup() { // Since everything in a Solid render tree is living inside a (possibly inert) Effect and can be nested, we made onCleanup a first-class method. You can call it at any scope and it will run when that scope is triggered to re-evaluate and when it is finally disposed
  // Use it in your components or in your Effects. Use it in your custom directives. Use it pretty much anywhere that is part of the synchronous execution of the reactive system.
  const [count, setCount] = createSignal(0);

             // setInterval(() => setCount(count() + 1), 1000); // 1 not cleaned up
  const timer = setInterval(() => setCount(count() + 1), 1000);
  onCleanup(() => clearInterval(timer));                        // 2 now cleaned up

  return <div>@LifecycleOnCleanup Count: {count()}</div>;
}
