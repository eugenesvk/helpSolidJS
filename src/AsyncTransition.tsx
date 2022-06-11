import { createSignal, Suspense, Switch, Match, useTransition }	from "solid-js";
import Child                                                   	from "./AsyncTransition-child";
import                                                         	     "./AsyncTransition-style.css";

export default function AsyncTransition() { // Suspense allows us to show fallback content when data is loading. This is great for initial loading, but on subsequent navigation it is often worse UX to fallback to the skeleton state.
  // We can avoid going back to the fallback state by leveraging useTransition. It provides a wrapper and a pending indicator. The wrapper puts all downstream updates in a transaction that doesn't commit until all async events complete.
  // This means that when control flow is suspended, it continues to show the current branch while rendering the next off-screen. Resource reads under existing boundaries add it to the transition. However, any new nested Suspense components will show "fallback" if they have not completed loading before coming into view.
  // Notice when you navigate in the example, we keep seeing the content disappear back to a loading placeholder
  // Let's add a transition in our App component
  const [tab, setTab]	= createSignal(0);
  // 1. let's replace the updateTab function:
  const updateTab1      	= (index) => () => setTab(index);
  const [pending, start]	= useTransition();
  const updateTab       	= (index) => () => start(() => setTab(index));
  // useTransition returns a pending signal indicator and a method to start the transition, which we will wrap around our update.
  // 2. We should use that pending signal to give an indicator in our UI. We can add a pending class to our tab container div
  // And with that our tab switching should be much smoother.

      //<div class="tab">
  return ( <>
      <ul class="inline">
        <li classList={{ selected: tab() === 0 }} onClick={updateTab(0)}> Uno  </li>
        <li classList={{ selected: tab() === 1 }} onClick={updateTab(1)}> Dos  </li>
        <li classList={{ selected: tab() === 2 }} onClick={updateTab(2)}> Tres </li>
      </ul>
      <div class="tab" classList={{ pending: pending() }}> {/*2. add a pending class*/}
        <Suspense fallback={<div class="loader">Loading...</div>}>
          <Switch>
            <Match when={tab() === 0}> <Child page="Uno" />  </Match>
            <Match when={tab() === 1}> <Child page="Dos" />  </Match>
            <Match when={tab() === 2}> <Child page="Tres" /> </Match>
          </Switch>
        </Suspense>
      </div>
    </>
  );
};
