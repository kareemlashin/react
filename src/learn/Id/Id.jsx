import axios from "axios";

import React, { PureComponent } from "react";

class Id extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  getData() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((data) => {
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentWillMount = () => {
    console.log("Id will mount");
  };

  componentDidMount = () => {
    console.log("Id mounted");
    this.getData();

    setInterval(() => {
      this.getData();
    }, 5000);
  };

  componentWillReceiveProps = (nextProps) => {
    console.log("Id will receive props", nextProps);
  };

  componentWillUpdate = (nextProps, nextState) => {
    console.log("Id will update", nextProps, nextState);
  };

  componentDidUpdate = () => {
    console.log("Id did update");
  };

  componentWillUnmount = () => {
    console.log("Id will unmount");
  };
  pass = () => {
    return this.props.name("zzzzzzzzzzzzzzz");
  };
  render() {
    if (this.state.hasError) {
      return <h1> Something went wrong. </h1>;
    }
    return (
      <div className="IdWrapper">
        Test content <button onClick={this.pass}> ccccccccccc </button>
      </div>
    );
  }
}

export default Id;
