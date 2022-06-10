import { Portal }	from 'solid-js/web';
import           	     './ControlFlowPortal.css';

export default function ControlFlowPortal() { // to insert elements outside the normal flow of the app, Z-indexes are sometimes insufficient to deal with render contexts for floating elements like Modals. Use <Portal> with child content inserted at the location of your choosing. By default, its elements will be rendered in a <div> in the document.body

  const ret = `<div class="app-container">
    <p>Just some text inside a div that has a restricted size.</p>
    <Portal>
      <div class="popup">
        <h1>Popup</h1>
        <p>THIS IS cut off due to CSS Some text you might need for something or other.</p>
      </div>
    </Portal>
    </div>`;
  // can solve this by pulling it out of the flow by wrapping the element in a <Portal>
  return (<div class="app-container">
    <p>Just some text inside a div that has a restricted size.</p>
    <Portal>
      <div class="popup">
        <h1>@Portal Popup</h1>
        <p>@Portal Some text you might need for something or other.</p>
      </div>
    </Portal>
    </div>);
}
