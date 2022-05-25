import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
        Test content
      </div>
    );
  }
}

Admin.propTypes = {
  // bla: PropTypes.string,
};

Admin.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Admin);
