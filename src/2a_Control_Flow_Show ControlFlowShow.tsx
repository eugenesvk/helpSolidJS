import { createSignal, Show } from 'solid-js';

export default function ControlFlowShow() { // show only the appropriate button that reflects the current state (whether the user is logged in)
  const [loggedIn, setLoggedIn]	= createSignal(false);
  const toggle                 	= () => setLoggedIn(!loggedIn())

  // <button onClick={toggle}>Log out</button>
  // <button onClick={toggle}>Log in</button>
  // fallback prop acts as the ELSE and will show when the condition passed to when is not truthy
  return (
    <>
      <Show
        when    ={loggedIn()}
        fallback={<button onClick={toggle}>Log in @Show=fallback</button>}
      >
                  <button onClick={toggle}>Log out @Show</button>
      </Show>
    </>
  );
}
