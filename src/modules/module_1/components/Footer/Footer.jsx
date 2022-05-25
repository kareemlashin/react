import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { Test } from './Footer.styles';

const Footer = (props) => (
  <div className="FooterWrapper">
    Test content
  </div>
);

Footer.propTypes = {
  // bla: PropTypes.string,
};

Footer.defaultProps = {
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
)(Footer);
