import { Suspense }    	from "solid-js";
import fetchProfileData	from "./AsyncSuspenseList-mock-api";
import ProfilePage     	from "./AsyncSuspenseList-profile";

export default function AsyncSuspenseList() { // multiple Suspense Components that you want to coordinate
  // 1. put everything under a single Suspense, but that limits us to a single loading behavior. A single fallback state means that everything always needs to wait until the last thing is loaded
  // 2. Use SuspenseList Component to coordinate that
  // Consider having multiple Suspense components like our example. If we wrap them with a SuspenseList configured with revealOrder of forwards, they will render in the order they appear in the tree regardless of the order they load. This reduces the page jumping around. You can set revealOrder to backwards or together, which, respectively, reverses the order or waits for all Suspense Components to load. In addition there is a tail option that can be set to hidden or collapsed. This overrides the default behavior of showing all fallbacks with either showing none or showing the next one in the direction set by revealOrder
  // Our example currently is a bit of a mess in terms of loading placeholders. While it loads all the data independently we are often showing multiple placeholders depending on the order data loads in
  // Let's wrap our ProfilePage component's JSX in a <SuspenseList> (@profile.tsx)

  const { user, posts, trivia } = fetchProfileData();
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <ProfilePage user={user()} posts={posts()} trivia={trivia()} />
    </Suspense>
  );
};
