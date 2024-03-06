// src/components/calculator/Buttons.js
import React from 'react';

class Buttons extends React.Component {
  render() {
    return (
      <div>
        <button
          className="jumbo"
          id="clear"
          onClick={this.props.initialize}
          style={{ background: '#ac3939' }}
          value="AC"
        >
          AC
        </button>
        <button id="divide" onClick={this.props.operators} style={{ background: '#666666' }} value="/">
          /
        </button>
        <button id="multiply" onClick={this.props.operators} style={{ background: '#666666' }} value="x">
          x
        </button>
        <button id="seven" onClick={this.props.numbers} value="7">
          7
        </button>
        <button id="eight" onClick={this.props.numbers} value="8">
          8
        </button>
        <button id="nine" onClick={this.props.numbers} value="9">
          9
        </button>
        <button id="subtract" onClick={this.props.operators} style={{ background: '#666666' }} value="-">
          -
        </button>
        <button id="four" onClick={this.props.numbers} value="4">
          4
        </button>
        <button id="five" onClick={this.props.numbers} value="5">
          5
        </button>
        <button id="six" onClick={this.props.numbers} value="6">
          6
        </button>
        <button id="add" onClick={this.props.operators} style={{ background: '#666666' }} value="+">
          +
        </button>
        <button id="one" onClick={this.props.numbers} value="1">
          1
        </button>
        <button id="two" onClick={this.props.numbers} value="2">
          2
        </button>
        <button id="three" onClick={this.props.numbers} value="3">
          3
        </button>
        <button className="jumbo" id="zero" onClick={this.props.numbers} value="0">
          0
        </button>
        <button id="decimal" onClick={this.props.decimal} value=".">
          .
        </button>
        <button id="equals" onClick={this.props.evaluate} style={{ background: '#004466' }} value="=">
          =
        </button>
      </div>
    );
  }
}

export default Buttons;
