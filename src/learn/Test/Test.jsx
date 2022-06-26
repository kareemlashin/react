import React, { PureComponent } from "react";

import Base from "../Base/Base";
import Id from "../Id/Id";
//import { Test } from './Test.styles';

class Test extends PureComponent {
  state;
  // Lifecycle
  // - constructor
  // - componentWillMount
  // - render
  // - componentDidMount
  // - componentWillUpdate
  // - render
  // - componentDidUpdate
  // - componentWillUnmount
  // - componentDidUnmount
  // React Router
  setNewData =(data)=>{
    this.setState({
      ...this.state,
      NewData:data,
    })
  }
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      NewData:'xxxxxxx',
      hasError: false,
      name: "kareem",
      age: "1",
      title: "1",
      titleName: "1",
      titleName3: "1",
      items: [
        {
          name: "2",
          age: "2",
          title: "2",
          titleName: "2",
        },
        {
          name: "3",
          age: "3",
          title: "3",
          titleName: "3",
        },
        {
          name: "1",
          age: "1",
          title: "1",
          titleName: "1",
        },
      ],
    };
  }
  componentWillMount = () => {
    console.log("Test will mount");
  };

  componentDidMount = () => {
    console.log("Test mounted");
  };
  componentWillReceiveProps = (nextProps) => {
    console.log("Test will receive props", nextProps);
  };

  componentWillUpdate = (nextProps, nextState) => {
    console.log("Test will update", nextProps, nextState);
  };

  componentDidUpdate = () => {
    console.log("Test did update");
  };

  componentWillUnmount = () => {
    console.log("Test will unmount");
  };
  setData2 = (name) => {
    this.setState({
      ...this.state,
      name: name,
    });
  };
  render() {
    console.log("Test render");
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="TestWrapper">
        {this.state.NewData}
        <Id name={this.setNewData}></Id>
        {/* props */}
        {this.props.title}
        {this.props.titleName}
        {this.props.titleName3}
        {this.state.name}
        {this.state.age}
        {this.state.titleName}
        {/* event */}
        <button
          onClick={(name) => {
            this.setData2("name");
          }}
        >
          setData
        </button>
        {/* map */}
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item.age}</li>
          ))}
        </ul>
        {/* if  */}
        {(() => {
          if (5 == 4) {
            return <div>yes</div>;
          } else {
            return <div>no</div>;
          }
        })()}
        {/*  Fragment / aux */}
        <Base></Base>
      </div>
    );
  }
}



export default Test;
