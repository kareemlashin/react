import React, { PureComponent } from 'react';

//import { Test } from './About.styles';

class About extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('About will mount');
  }

  componentDidMount = () => {
    console.log('About mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('About will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('About will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('About did update');
  }

  componentWillUnmount = () => {
    console.log('About will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="AboutWrapper">
        Test AboutWrapper AboutWrapper AboutWrapper
      </div>
    );
  }
}
export default About