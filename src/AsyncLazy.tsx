import { lazy }                  	from "solid-js";
// import Greeting               	from "./AsyncLazy-greeting";     // 1 normal import
// const Greeting = lazy(() =>   	import("./AsyncLazy-greeting")); // 2 will likely still load too quickly to see. But you add a fake delay if you wish to make the loading more visible.
const Greeting = lazy(async () =>	{
  await new Promise(r => setTimeout(r, 2000)) // 3 add a fake delay
  return import("./AsyncLazy-greeting")
});

export default function AsyncLazy() { // Most bundlers (like Webpack, Rollup, Parcel, Vite) automatically handle code splitting when you use a dynamic import
	// Solid's lazy method allows us to wrap the component's dynamic import for deferred lazy loading. The output is a Component that can be used as normal in our JSX template with the exception that internally it dynamically loads the underlying imported code when it is rendered the first time, halting that branch of rendering until the code is available

  return (<>
    <h1>Welcome</h1>
    <Greeting name="Jake" />
  </>);
}
