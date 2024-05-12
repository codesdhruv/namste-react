import React from "react";
import ReactDOM from "react-dom/client";
// createElement => React Element-JS Object => HTMLElement(Rendered)
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" }, //attributes
//   "Hello from react" // childrens
// );

const elem = <h1>React Element Using JSX</h1>;

// Using JSX - not HTML, lookis like HTML
// Always first name of functional component start with capital letter
// At the end functional component is a normal javascript function
const Title = () => (
  <h1 className="heading" tabIndex="5">
    Namaste React React Element
    {elem}
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="parent"> Namaste React Function Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
