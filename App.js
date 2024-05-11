const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" }, //attributes
  "Hello from react" // childrens
);
//props = attribute + children
console.log(heading); //at the end of day its a java script object

/**
 * creating a nested div(we dont use it)
 * <div id="parent">
 *  <div id="child">
 *      <h1>I am H1 div</h1>
 *      <h2>I am H2 div</h2>
 *  <div>
 * <div>
 */
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, " I am H1 div"),
    React.createElement("h2", {}, " I am H2 div"),
  ])
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
