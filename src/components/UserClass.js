import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "child constructor");
    this.state = {
      userInfo: {
        name: "kunal",
        location: "dummy",
      },
    };
  }

  async componentDidMount() {
    console.log(this.props.name + "child component did mount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log(this.props.name + "child render");
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h1>Name: {name}</h1>
        <h3>Location: {location}</h3>
        <h3>Contact</h3>
      </div>
    );
  }
}

export default UserClass;
