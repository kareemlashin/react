import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { Test } from './Nav.styles';

const Nav = (props) => (
  <div className="NavWrapper">
    Test content
  </div>
);

Nav.propTypes = {
  // bla: PropTypes.string,
};

Nav.defaultProps = {
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
)(Nav);
