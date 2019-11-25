import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = store => ({});
const mapDispatchToProps = dispatch => ({});

class ContainerOne extends Component {
  constructor() {
    super();
  }

  render() {
    return <div>Container One</div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerOne);
