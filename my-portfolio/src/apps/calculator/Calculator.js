// src/components/calculator/Calculator.js
import React from 'react';
import Formula from './Formula';
import Output from './Output';
import Buttons from './Buttons';
import './Calculator.css';

const isOperator = /[x/+-]/;
const endsWithOperator = /[x+-/]$/;
const endsWithNegativeSign = /\d[x/+-]{1}-$/;
const clearStyle = {
  background: "#ac3939",
};
const operatorStyle = {
  background: "#666666",
};
const equalsStyle = {
  background: "#004466",
  position: "absolute",
  height: 130,
  bottom: 5,
};



class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVal: '0',
      prevVal: '0',
      formula: '',
      currentSign: 'pos',
      lastClicked: '',
      evaluated: false,
    };

    this.maxDigitWarning = this.maxDigitWarning.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
    this.handleEvaluate = this.handleEvaluate.bind(this);
    this.initialize = this.initialize.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleNumbers = this.handleNumbers.bind(this);
  }

  maxDigitWarning() {
    this.setState({
      currentVal: 'Digit Limit Met',
      prevVal: this.state.currentVal,
    });

    setTimeout(() => this.setState({ currentVal: this.state.prevVal }), 1000);
  }

  handleEvaluate() {
    if (!this.state.currentVal.includes('Limit')) {
      let expression = this.state.formula;
      for (; endsWithOperator.test(expression); )
        expression = expression.slice(0, -1);
      expression = expression
        .replace(/x/g, '*')
        .replace(/-/g, '-')
        .replace('--', '-');
      let answer = Math.round(1e12 * eval(expression)) / 1e12;
      this.setState({
        currentVal: answer.toString(),
        formula:
          expression.replace(/\*/g, '⋅').replace(/-/g, '-').replace(/(x|\/|\+)-/, '$1-').replace(/^-/, '-') +
          '=' +
          answer,
        prevVal: answer,
        evaluated: true,
      });
    }
  }

  handleOperators(e) {
    if (!this.state.currentVal.includes('Limit')) {
      const t = e.target.value;
      const { formula: a, prevVal: r, evaluated: s } = this.state;
      this.setState({
        currentVal: t,
        evaluated: false,
      });
      if (s) {
        this.setState({
          formula: r + t,
        });
      } else if (endsWithOperator.test(a)) {
        if (endsWithNegativeSign.test(a)) {
          if (t !== '-') {
            this.setState({
              formula: r + t,
            });
          }
        } else {
          this.setState({
            formula: (endsWithNegativeSign.test(a + t) ? a : r) + t,
          });
        }
      } else {
        this.setState({
          prevVal: a,
          formula: a + t,
        });
      }
    }
  }

  handleNumbers(e) {
    if (!this.state.currentVal.includes('Limit')) {
      const { currentVal: t, formula: a, evaluated: r } = this.state;
      const s = e.target.value;
      this.setState({
        evaluated: false,
      });
      if (t.length > 21) {
        this.maxDigitWarning();
      } else if (r) {
        this.setState({
          currentVal: s,
          formula: s !== '0' ? s : '',
        });
      } else {
        this.setState({
          currentVal:
            t === '0' || isOperator.test(t) ? s : t + s,
          formula:
            t === '0' && s === '0' ? (a === '' ? s : a) : /([^.0-9]0|^0)$/.test(a)
            ? a.slice(0, -1) + s
            : a + s,
        });
      }
    }
  }

  handleDecimal() {
    if (this.state.evaluated) {
      this.setState({
        currentVal: '0.',
        formula: '0.',
        evaluated: false,
      });
    } else if (!this.state.currentVal.includes('.') && !this.state.currentVal.includes('Limit')) {
      this.setState({
        evaluated: false,
      });
      if (this.state.currentVal.length > 21) {
        this.maxDigitWarning();
      } else if (endsWithOperator.test(this.state.formula) || (this.state.currentVal === '0' && this.state.formula === '')) {
        this.setState({
          currentVal: '0.',
          formula: this.state.formula + '0.',
        });
      } else {
        this.setState({
          currentVal: this.state.formula.match(/(-?\d+\.?\d*)$/)[0] + '.',
          formula: this.state.formula + '.',
        });
      }
    }
  }

  initialize() {
    this.setState({
      currentVal: '0',
      prevVal: '0',
      formula: '',
      currentSign: 'pos',
      lastClicked: '',
      evaluated: false,
    });
  }

  render() {
    return (
      <div>
        <div className="calculator">
          <Formula formula={this.state.formula.replace(/x/g, '⋅')} />
          <Output currentValue={this.state.currentVal} />
          <Buttons
            decimal={this.handleDecimal}
            evaluate={this.handleEvaluate}
            initialize={this.initialize}
            numbers={this.handleNumbers}
            operators={this.handleOperators}
          />
        </div>
        <div className="author">
          Designed and Coded By <br />
          <a
            href="https://nwafor-david-paul.000webhostapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            NWAFOR DAVID PAUL
          </a>
        </div>
      </div>
    );
  }
}

export default Calculator;
