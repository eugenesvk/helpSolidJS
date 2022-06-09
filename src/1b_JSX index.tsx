/* @refresh reload */
import { render } from 'solid-js/web';

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
  return (<>
    <div>Hello {name}!</div>
    {svg}
    </>)
}

// render(() => <App />, document.getElementById('root') as HTMLElement);
render(() => <HelloWorld />, document.getElementById('root'))
