import { createSignal }	from "solid-js";

export default function BindingStyle() { // style attribute accepts either style strings or objects
  // However the object form differs from Element.prototype.style and instead is a wrapper for calling style.setProperty
    // keys take the dash-case form     	"background-color" vs "backgroundColor"
    // units must be explicitly provided	width:500px        vs width:500
    // => we have the ability to set CSS variables:
      // <div style={{ "--my-custom-color": themeColor() }} />

  const [num, setNum] = createSignal(0);
  setInterval(() => setNum((num() + 1) % 255), 30)

  const r1=`<div>Some Text</div>;`
  return <div style={{
    color        	: `rgb(${num()}, 180, ${num()})`,
    "font-weight"	: 800,
    "font-size"  	: `${num()}px`}}>
                 Some Text</div>;
}
