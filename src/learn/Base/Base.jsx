import React, { Fragment, PureComponent } from 'react';


class Base extends PureComponent { 
  constructor(props) {
    super(props);
    this.xxxx=React.createRef()

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Base will mount');
  }

  componentDidMount = () => {
    console.log('Base mounted');
    this.xxxx.current.style.color = 'red';
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Base will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Base will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Base did update');
  }

  componentWillUnmount = () => {
    console.log('Base will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="BaseWrapper">
        Fragment Fragment Fragment
        <div ref={this.xxxx}>
        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </div>
      </div>
    );
  }
}

export default Base;
