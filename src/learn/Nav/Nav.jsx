import React, { PureComponent } from "react";

import { NavLink, Link } from "react-router-dom";

class Nav extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log("Nav will mount");
  };

  componentDidMount = () => {
    console.log("Nav mounted");
  };

  componentWillReceiveProps = (nextProps) => {
    console.log("Nav will receive props", nextProps);
  };

  componentWillUpdate = (nextProps, nextState) => {
    console.log("Nav will update", nextProps, nextState);
  };

  componentDidUpdate = () => {
    console.log("Nav did update");
  };

  componentWillUnmount = () => {
    console.log("Nav will unmount");
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="NavWrapper">
        <NavLink
          to="/"
          className={(isActive) =>
            "nav-link " + (isActive.isActive ? " unselected" : " selected")
          }
        >
          Home
        </NavLink>
        <NavLink
          to="Home"
          className={(isActive) =>
            "nav-link " + (isActive.isActive ? " unselected" : " selected")
          }
        >
          Home Home Home
        </NavLink>
        <NavLink
          to="Home"
          className={(isActive) =>
            "nav-link " + (isActive.isActive ? " unselected" : " selected")
          }
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          className={(isActive) =>
            "nav-link " + (isActive.isActive ? " unselected" : " selected")
          }
        >
          About
        </NavLink>
        <NavLink
          to="contact"
          className={(isActive) =>
            "nav-link " + (isActive.isActive ? " unselected" : " selected")
          }
        >
          Contact
        </NavLink>
      </div>
    );
  }
}


export default Nav;
