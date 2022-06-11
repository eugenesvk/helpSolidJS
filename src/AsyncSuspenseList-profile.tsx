import { For, Suspense, SuspenseList } from "solid-js";

const ProfileDetails = (props) => <h1>{props.user?.name}</h1>;

const ProfileTimeline = (props) => (
  <ul> <For each={props.posts}>{(post) => <li>{post.text}</li>}</For> </ul>
);

const ProfileTrivia = (props) => ( <>
    <h2>Fun Facts</h2>
    <ul> <For each={props.trivia}>{(fact) => <li>{fact.text}</li>}</For> </ul>
  </>);

  // Let's wrap our ProfilePage component's JSX in a <SuspenseList>
  // revealOrder: backwards, together, which, respectively, reverses the order or waits for all Suspense Components to load
  // tail option: hidden, collapsed. This overrides the default behavior of showing all fallbacks with either showing none or showing the next one in the direction set by revealOrder
const ProfilePage = (props) => (<>
  <SuspenseList revealOrder="forwards" tail="collapsed">
    <ProfileDetails user={props.user} />
    <Suspense fallback={<h2>Loading posts...</h2>}>
      <ProfileTimeline posts={props.posts} />
    </Suspense>
    <Suspense fallback={<h2>Loading fun facts...</h2>}>
      <ProfileTrivia trivia={props.trivia} />
    </Suspense>
  </SuspenseList>
  </>);

export default ProfilePage;
