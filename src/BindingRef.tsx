import { onMount, onCleanup }	from "solid-js";
import                       	     "./BindingRef.css";

export default function BindingRef() { // You can always get a reference to a DOM element in Solid through assignment, since JSX creates actual DOM elements:
    // const myDiv = <div>My Element</div>;
  // NB! more efficient not to break elements out, but put them in a single contiguous JSX template
  // get a reference to an element using the ref attribute: Refs are basically assignments like the example above, which happen at creation time before they are attached to the document DOM. Just declare a variable, pass it in as a ref attribute, and the variable will be assigned to
    // let myDiv;
    // <div ref={myDiv}>My Element</div>
  // Refs can also take the form of a callback function. This can be convenient for encapsulating logic, especially when you don't need to wait until the elements are attached. For example:
    // <div ref={el => /* do something with el... */}>My Element</div>

  let canvas;
  onMount(() => {
    const ctx = canvas.getContext("2d");
    let frame = requestAnimationFrame(loop);

    function loop(t) {
      frame          	= requestAnimationFrame(loop);
      const imageData	= ctx.getImageData(0, 0, canvas.width, canvas.height);

      for (let p = 0; p < imageData.data.length; p += 4) {
        const i = p / 4;
        const x = i % canvas.width;
        const y = (i / canvas.height) >>> 0;

        const r = 64 + (128 * x) / canvas.width  + 64 * Math.sin(t / 1000);
        const g = 64 + (128 * y) / canvas.height + 64 * Math.cos(t / 1000);
        const b = 128;

        imageData.data[p + 0] = r;
        imageData.data[p + 1] = g;
        imageData.data[p + 2] = b;
        imageData.data[p + 3] = 255;
      }

      ctx.putImageData(imageData, 0, 0);
    }

    onCleanup(() => cancelAnimationFrame(frame));
  });

  const r1 = `<canvas width="256" height="256" />;`
  return <canvas ref={canvas} width="256" height="256" />;
}
