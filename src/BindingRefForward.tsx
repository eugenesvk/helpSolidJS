import { onMount, onCleanup }	from "solid-js";
import Canvas                	from "./canvas";

export default function BindingRefForward() { // you might want to expose a ref from inside a component to a parent. The way we do this is still by using the ref attribute. From the outside, using ref on a component works very similar to using ref on a native element. You can pass it a variable to be assigned or a callback function
  // However, it is the component author's responsibility to connect that ref to an internal element to forward it back up. To do so, we leverage props.ref. This is a callback form of ref if either type of ref is given, but this detail is mostly hidden from you as you will more than likely just be assigning it directly to the ref attribute of one of the elements or components in this component's JSX
  // To get the logo animating again, we need to forward the ref from canvas.tsx:
    //return <canvas width="256" height="256" />;
    //return <canvas ref={props.ref} width="256" height="256" />;

  let canvas;
  onMount(() => {
    const ctx = canvas.getContext("2d");
    let frame = requestAnimationFrame(loop);

    function loop(t) {
      frame = requestAnimationFrame(loop);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      for (let p = 0; p < imageData.data.length; p += 4) {
        const i = p / 4;
        const x = i % canvas.width;
        const y = (i / canvas.height) >>> 0;

        const r = 64 + (128 * x) / canvas.width + 64 * Math.sin(t / 1000);
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

  return <Canvas ref={canvas} />;
}
