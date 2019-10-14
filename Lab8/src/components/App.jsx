import React, { Component } from 'react'
import '../css/calc.css'
import Display from './Display.jsx'
import Board from './Board.jsx'
import Leaf from './Leaf.jsx'

class App extends Component {
  constructor() {
    super()
    this.state = {
      operator: '',
      num1: '',
      num2: '',
      result: '',
      decimal: false,
      sign: false,
    }
  }

    onClick = (button) => {
      const {
        operator, num1, num2, decimal, sign,
      } = this.state
      if (button === '=') {
        this.calculate()
      } else if (button === '+/-') {
        if (sign === false) {
          if (num1 !== '' && num2 === '') {
            this.setState((prevState) => ({
              num1: prevState.num1,
              result: prevState.result,
              sign: true,
            }))
          } else {
            this.setState((prevState) => ({
              num2: prevState.num2,
              result: prevState.result,
              sign: true,
            }))
          }
        } else if (num1 !== '' && num2 === '') {
          this.setState((prevState) => ({
            num1: prevState.num1,
            result: prevState.result,
            sign: true,
          }))
        } else {
          this.setState((prevState) => ({
            num2: prevState.num2,
            result: prevState.result,
            sign: true,
          }))
        }
      } else if (button === 'c') {
        if (num1 !== '' && num2 === '') {
          this.reset()
          this.setState({
            num1: '',
          })
        } else {
          this.reset()
          this.setState({
            num2: '',
          })
        }
      } else if (button === '+') {
        if (operator !== '') {
          this.calculate()
          this.setState({
            operator: button,
          })
          this.reset()
        } else {
          this.reset()
          this.setState({
            operator: button,
          })
        }
      } else if (button === '-') {
        if (operator !== '') {
          this.calculate()
          this.setState({
            operator: button,
          })
          this.reset()
        } else {
          this.reset()
          this.setState({
            operator: button,
          })
        }
      } else if (button === '*') {
        if (operator !== '') {
          this.calculate()
          this.setState({
            operator: button,
          })
          this.reset()
        } else {
          this.reset()
          this.setState({
            operator: button,
          })
        }
      } else if (button === '/') {
        if (operator !== '') {
          this.calculate()
          this.setState({
            operator: button,
          })
          this.reset()
        } else {
          this.reset()
          this.setState({
            operator: button,
          })
        }
      } else if (button === '%') {
        if (operator !== '') {
          this.calculate()
          this.setState({
            operator: button,
          })
          this.reset()
        } else {
          this.reset()
          this.setState({
            operator: button,
          })
        }
      } else if (operator === '') {
        if (num1.length < 9) {
          if (button === '.' && decimal === false) {
            this.setState((prevState) => ({
              num1: prevState.num1 + button,
              result: prevState.result + button,
              decimal: true,
            }))
          } else if (button !== '.') {
            this.setState((prevState) => ({
              num1: prevState.num1 + button,
              result: prevState.result + button,
            }))
          }
        }
      } else if (num2.length < 9) {
        if (button === '.' && decimal === false) {
          this.setState((prevState) => ({
            num2: prevState.num2 + button,
            result: prevState.result + button,
            decimal: true,
          }))
        } else if (button !== '.') {
          this.setState((prevState) => ({
            num2: prevState.num2 + button,
            result: prevState.result + button,
          }))
        }
      }
    }

    reset() {
      this.setState({
        result: '',
        decimal: false,
        sign: false,
      })
    }

    error() {
      this.setState({
        operator: '',
        num1: '',
        num2: '',
        result: 'ERROR',
      })
    }

    result(res) {
      if (parseInt(res, 10).toString().length > 9 || parseFloat(res) < 0) {
        this.error()
      } else if (parseFloat(res) > 0.1 && parseInt(res, 10).toString().length > 7) {
        this.error()
      } else {
        this.setState({
          operator: '',
          num1: parseFloat(res).toFixed(1),
          num2: '',
          result: parseFloat(res).toFixed(1),
        })
      }
    }

    add() {
      const { num1, num2 } = this.state
      const res = parseFloat(num1) + parseFloat(num2)
      this.result(res)
    }

    substract() {
      const { num1, num2 } = this.state
      const res = parseFloat(num1) - parseFloat(num2)
      this.result(res)
    }

    multiply() {
      const { num1, num2 } = this.state
      const res = parseFloat(num1) * parseFloat(num2)
      this.result(res)
    }

    division() {
      const { num1, num2 } = this.state
      const res = parseFloat(num1) / parseFloat(num2)
      this.result(res)
    }

    mod() {
      const { num1, num2 } = this.state
      const res = parseFloat(num1) % parseFloat(num2)
      this.result(res)
    }

    calculate() {
      const { operator } = this.state
      if (operator === '+') {
        this.add()
      } else if (operator === '-') {
        this.substract()
      } else if (operator === '*') {
        this.multiply()
      } else if (operator === '%') {
        this.mod()
      } else {
        this.division()
      }
    }


    render() {
      const { result } = this.state
      return (
        <div>
          <Leaf />
          <Leaf />
          <div className="body">
            <div className="calculator-body">
              <Display result={result} />
              <Board onClick={this.onClick} />
            </div>
          </div>
        </div>
      )
    }
}

export default App
