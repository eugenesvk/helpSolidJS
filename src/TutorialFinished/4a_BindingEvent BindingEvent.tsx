import { createSignal, onCleanup }	from "solid-js";
import                            	     "./BindingEvent.css";

export default function BindingEvent() { // Events are attributes prefixed with on, treated specially:
  // Don't follow the normal heuristics for wrapping. In many cases, it is difficult to determine the difference between a Signal and an event handler. And so, since events are called and don't require reactivity to update, they are only bound initially. You can always just have your handler run different code based on the current state of your app
  // Common UI events (that bubble and are composed) are automatically delegated to the document. To improve delegated performance, Solid supports an array syntax to call the handler with data (as the first argument) without creating additional closures:
    // const handler = (data, event) => /*...*/
    // <button onClick={[handler, data]}>Click Me</button>

  const [pos, setPos] = createSignal({x:0, y:0});

  function handleMouseMove(event) {
    setPos({x: event.clientX,
            y: event.clientY });
  }
  // All on bindings are case insensitive which means that event names need to be in lowercase. For example, onMouseMove monitors the event name mousemove
  // if you need to support other casings or not use event delegation, you can use on: namespace to match event handlers that follows the colon:
    // <button on:DOMContentLoaded={() => /* Do something */}
  const r=`<div>                              @BindingEvent Mouse pos: {pos().x}x {pos().y}y </div>`
  return ( <div onMouseMove={handleMouseMove}>@BindingEvent Mouse pos: {pos().x}x {pos().y}y </div> );
}
