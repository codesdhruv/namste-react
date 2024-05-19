import UserClass from "./UserClass";
import React from "react";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    //API Call
    console.log("parent component did mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>thanks for contact!!!!</h1>
        <UserClass name={"first "} location={"location from  class"} />
        <UserClass name={"Second "} location={"location from class"} />
      </div>
    );
  }
}

export default Contact;
