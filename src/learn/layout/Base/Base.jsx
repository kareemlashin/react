import React, { PureComponent } from 'react';

import { Outlet } from 'react-router-dom';

import Nav from '../../Nav/Nav';

class Base extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Base will mount');
  }

  componentDidMount = () => {
    console.log('Base mounted');
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
        <div>
        BaseWrapper 
        <Nav></Nav>
        </div>
        <div>
          <Outlet />
        </div>

        <div>
        BaseWrapper
        </div>
      </div>
    );
  }
}

export default Base;
