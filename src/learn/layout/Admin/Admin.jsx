import React, { PureComponent } from 'react';

import { Outlet } from 'react-router-dom';

import Nav from '../../Nav/Nav';

//import { Test } from './Admin.styles';

class Admin extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Admin will mount');
  }

  componentDidMount = () => {
    console.log('Admin mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Admin will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Admin will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Admin did update');
  }

  componentWillUnmount = () => {
    console.log('Admin will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="AdminWrapper">
        <div>
        Admin Admin Admin
        <Nav></Nav>

        </div>
        <div>
        <Outlet />
        </div>
        <div>
        Admin Admin Admin
        </div>
      </div>
    );
  }
}


export default Admin;
