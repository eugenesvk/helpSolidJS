import { createSignal, onMount, For, createEffect }	from "solid-js";
import "./LifecycleOnMount.css";

export default function LifecycleOnMount() { // A few Lifecycle functions as everything lives and dies by the reactive system. The reactive system is created and updates synchronously, so the only scheduling comes down to Effects which are pushed to the end of the update.
	// but devs don't think this way, so alias <onMount>: is just a createEffect call that is non-tracking (never re-runs), runs only once for your component, once all initial rendering is done
	// Lifecycles are only run in the browser
  const [photos, setPhotos] = createSignal([]);

  // createEffect(async () => { // works the same as onMount
  //   const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
  //   setPhotos(await res.json());
  // });
  onMount(async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
    setPhotos(await res.json());
  });

  return (<>
    <h1>@LifecycleOnMount: Photo album</h1>

    <div class="photos">
      <For each={photos()} fallback={<p>Loading...</p>}>{ photo =>
        <figure>
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <figcaption>{photo.title}</figcaption>
        </figure>
      }</For>
    </div>
  </>);
}
