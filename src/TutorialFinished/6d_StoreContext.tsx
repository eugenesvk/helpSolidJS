import Nested	from "./StoreContext-nested";

export default function StoreContext() { // Context API allows passing data around without relying on passing through props. This is useful for sharing Signals and Stores. Using Context has the benefit of being created as part of the reactive system and managed by it
	// To get started we create a Context object. This object contains a Provider component used to inject our data. However, it is common practice to wrap the Provider components and useContext consumers with versions already configured for the specific Context.
	// See the definition for a simple counter store in the StoreContext-counter.tsx file.
	// To use context
	  // 1.(@index.tsx) wrap our App component to provide it globally. We will use our wrapped CounterProvider. In this case let's give it an initial count of 1
	  // 2. (@nested.tsx) Next we need to consume the counter context in our nested.tsx component. We do this by using the wrapped useCounter consumer

  return <>
    <h1>Welcome to Counter App</h1>
    <Nested />
  </>
}
