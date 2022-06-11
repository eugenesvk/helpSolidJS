import { createSignal, batch }	from "solid-js";

export default function ReactivityBatching() { // Solid's reactivity is synchronous: by the next line after any change, the DOM will have updated. And for the most part this is perfectly fine, as Solid's granular rendering is just a propagation of the update in the reactive system. Unrelated changes "rendering" twice don't actually mean wasted work.
  // What if the changes are related? Solid's batch helper allows to queue up multiple changes and then apply them all at the same time before notifying their observers. Within the batch, updated Signal values are not committed until completion.
  // In this example, we are assigning both names on a button click and this triggers our rendered update TWICE. You can see the logs in the console when you click the button. So let's wrap the set calls in a batch.

  const [firstName, setFirstName] = createSignal("John");
  const [lastName , setLastName]  = createSignal("Smith");
  const fullName = () => {
    console.log("Running FullName");
    return `${firstName()} ${lastName()}`
  }
  const updateNames = () => {
    console.log("Button Clicked");
    batch(() => { // wrap the set calls in a batch to run only once
      setFirstName(firstName() + "n");
      setLastName(lastName()   + "!");
    })
  }

  return <button onClick={updateNames}>My name is {fullName()}</button>
}
