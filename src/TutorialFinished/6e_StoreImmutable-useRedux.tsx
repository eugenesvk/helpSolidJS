import { onCleanup }             	from "solid-js";
import { createStore, reconcile }	from "solid-js/store";

export default function useRedux(store, actions) {
  // 1 The core behavior is that we created a Store object and subscribe to the Redux store to update state on update
  const [state, setState] = createStore(store.getState());
  // const unsubscribe = store.subscribe( () => setState(store.getState()) );
  // 2 more efficient with a diffing method reconcile that enhances the setStore cal and lets us diff the data from these immutable sources, only notifying the granular updates.
  const unsubscribe = store.subscribe(() => setState(reconcile(store.getState())));

  onCleanup(() => unsubscribe());
  return [state, mapActions(store, actions)];
};

function mapActions(store, actions) {
  const mapped = {};
  for (const key in actions) {
    mapped[key] = (...args) => store.dispatch(actions[key](...args));
  }
  return mapped;
}
