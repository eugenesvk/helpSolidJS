import { createSignal, createResource }	from "solid-js";

const fetchUser = async (id) =>
  (await fetch(`https://swapi.dev/api/people/${id}/`)).json();

export default function AsyncResource() { // Resources are special Signals designed specifically to handle Async loading. Their purpose is wrap async values in a way that makes them easy to interact with in Solid's distributed execution model. This is the opposite to async/await or generators which provide sequential execution models. The goal is for async to not block execution and not color our code.
  // Resources can be driven by a source signal that provides the query to an async data fetcher function that returns a promise. The contents of the fetcher function can be anything. You can hit typical REST endpoints or GraphQL or anything that generates a promise. Resources are not opinionated on the means of loading the data, only that they are driven by promises.
  // The resulting Resource Signal also contains reactive loading and error properties that make it easy to control our view based on the current status.

  const [userId, setUserId]	= createSignal();
  //const [user]           	= createSignal();
  const   [user]           	= createResource(userId, fetchUser); // replace our user signal with a resource
    // 1 It is driven by the userId Signal and calls our fetch method on change. Not much else to it.
    // 2nd value that comes back from createResource contains a mutate method for directly updating the internal Signal and a refetch method to reload the current query even if the source hasn't changed.
    // const [user, { mutate, refetch }] = createResource(userId, fetchUser);
  // lazy uses createResource internally to manage its dynamic imports.

  return (<>
      <input
        type       	="number"
        min        	="1"
        placeholder	="Enter Numeric Id"
        onInput    	={(e) => setUserId(e.currentTarget.value)} />
      <span>{user.loading && "Loading..."}</span>
      <div> <pre>{JSON.stringify(user(), null, 2)}</pre> </div>
    </>
  );
};
