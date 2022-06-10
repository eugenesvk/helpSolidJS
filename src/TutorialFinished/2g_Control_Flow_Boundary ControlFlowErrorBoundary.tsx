import { ErrorBoundary }	from 'solid-js';

const Broken = (props) => {
  throw new Error("Oh No");
  return <>Never Getting Here</>
}

export default function ControlFlowErrorBoundary() { // A JS error originating in the UI shouldn’t break the whole app. <ErrorBoundary> catch errors anywhere in their child component tree, log them, and display a fallback UI instead of the component tree that crashed
  const ret1 = `<>
    <div>Before</div>
    <Broken />
    <div>After</div>
    </>`;
  return (<>
    <div>Before</div>
    <ErrorBoundary fallback={err => err}>
      <Broken />
    </ErrorBoundary>
    <div>After</div>
    </>);
}
