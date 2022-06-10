/* @refresh reload */
import { render }              	from 'solid-js/web';
import Nested                  	from "./nested";
import Counter                 	from "./signal";
import FibCounter              	from "./memo";
import ControlFlowShow         	from "./ControlFlowShow";
import ControlFlowFor          	from "./ControlFlowFor";
import ControlFlowIndex        	from "./ControlFlowIndex";
import ControlFlowSwitchMatch  	from "./ControlFlowSwitchMatch";
import ControlFlowDynamic      	from "./ControlFlowDynamic";
import ControlFlowPortal       	from "./ControlFlowPortal";
import ControlFlowErrorBoundary	from "./ControlFlowErrorBoundary";
import LifecycleOnMount        	from "./LifecycleOnMount";

// import './index.css';
// import App from './App';
function HelloWorld() {
  const name = "Solid";
  const svg1 = (<div>Replace me with an svg</div>)
  const svg = (
    <svg height="300" width="400">
    <defs>
      <linearGradient id="gr1" x1="0%" y1="60%" x2="100%" y2="0%">
        <stop offset="5%" style="stop-color:rgb(255,255,3);stop-opacity:1" />
        <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
      </linearGradient>
    </defs>
    <ellipse cx="125" cy="150" rx="100" ry="60" fill="url(#gr1)" />
    Sorry but this browser does not support inline SVG.
    </svg>)
  const nested =(<Nested />) // Components are just functions like the HelloWorld() one we've been using so far. What makes them special is that they typically return JSX and can be called by JSX in other components. When the parent component first renders, it will execute the Nested() function and won't call it ever again. All updates are applied by Solid’s reactivity system which we will cover in the next couple of lessons.
  return (<>
    <div>
      Hello1 {name}!
      {nested}
    <LifecycleOnMount />
    <ControlFlowErrorBoundary />
    <ControlFlowPortal />
    <ControlFlowDynamic />
    <ControlFlowSwitchMatch />
    <ControlFlowIndex />
    <ControlFlowFor />
    <ControlFlowShow />
    </div>
    <counter /> lower case name in JSX means a builtin component, UPPER start case means a Component
    <FibCounter />
    {svg}
    </>)
}

// render(() => <App />, document.getElementById('root') as HTMLElement);
render(() => <HelloWorld />, document.getElementById('root'))
