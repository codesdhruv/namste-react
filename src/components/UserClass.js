import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "child constructor");
    this.state = {
      count: 0,
      count2: 2,
    };
  }

  componentDidMount() {
    console.log(this.props.name + "child component did mount");
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    console.log(this.props.name + "child render");
    return (
      <div className="user-card">
        <h1>count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increse count
        </button>
        <h1>Name: {name}</h1>
        <h3>Location: {location}</h3>
        <h3>Contact</h3>
      </div>
    );
  }
}

export default UserClass;
