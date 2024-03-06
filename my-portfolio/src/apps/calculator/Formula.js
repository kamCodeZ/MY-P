// src/components/calculator/Formula.js
import React from 'react';

class Formula extends React.Component {
  render() {
    return <div className="formulaScreen">{this.props.formula}</div>;
  }
}

export default Formula;
