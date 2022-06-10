import Info from "./info";

const pkg = {
  name   	: "solid-js",
  version	: 1,
  speed  	: "⚡️",
  website	: "https://solidjs.com",
};

export default function BindingSpread() { // Sometimes your components and elements accept a variable number of attributes and it makes sense to pass them down as an object instead of individually. This is especially true when wrapping a DOM element in a component, a common practice when making design systems
  // For this we use the spread operator ....


  let r = `
    <Info
      name   	= {pkg.name}
      version	= {pkg.version}
      speed  	= {pkg.speed}
      website	= {pkg.website}
    />`
  return (
    <Info
      {...pkg}
    />
  );
}
