import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Board extends PureComponent {
  render() {
    const { onClick } = this.props
    return (
      <div className="button">
        <button name="c" type="submit" onClick={(e) => onClick(e.target.name)}>C</button>
        <button name="%" type="submit" onClick={(e) => onClick(e.target.name)}>%</button>
        <button name="+/-" type="submit" onClick={(e) => onClick(e.target.name)}>+/-</button>
        <br />

        <button name="7" type="submit" onClick={(e) => onClick(e.target.name)}>7</button>
        <button name="8" type="submit" onClick={(e) => onClick(e.target.name)}>8</button>
        <button name="9" type="submit" onClick={(e) => onClick(e.target.name)}>9</button>
        <button name="*" type="submit" className="color" onClick={(e) => onClick(e.target.name)}>*</button>
        <br />

        <button name="4" type="submit" onClick={(e) => onClick(e.target.name)}>4</button>
        <button name="5" type="submit" onClick={(e) => onClick(e.target.name)}>5</button>
        <button name="6" type="submit" onClick={(e) => onClick(e.target.name)}>6</button>
        <button name="-" type="submit" className="color" onClick={(e) => onClick(e.target.name)}>-</button>
        <br />

        <button name="1" type="submit" onClick={(e) => onClick(e.target.name)}>1</button>
        <button name="2" type="submit" onClick={(e) => onClick(e.target.name)}>2</button>
        <button name="3" type="submit" onClick={(e) => onClick(e.target.name)}>3</button>
        <button name="+" type="submit" className="color" onClick={(e) => onClick(e.target.name)}>+</button>
        <br />

        <button name="." type="submit" className="color" onClick={(e) => onClick(e.target.name)}>.</button>
        <button name="0" type="submit" onClick={(e) => onClick(e.target.name)}>0</button>
        <button name="=" type="submit" className="color" onClick={(e) => onClick(e.target.name)}>=</button>
        <button name="/" type="submit" className="color" onClick={(e) => onClick(e.target.name)}>÷</button>
        <br />
      </div>
    )
  }
}

Board.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Board
