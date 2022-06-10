import "./BindingRefForward.css";

export default function Canvas(props) {
  const r1 = `<canvas width="256" height="256" />;`
  return <canvas ref={props.ref} width="256" height="256" />;
}
