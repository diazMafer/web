import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Display extends PureComponent {
  render() {
    const { result } = this.props
    return (
      <div className="result">
        <p>{result}</p>
      </div>
    )
  }
}

Display.propTypes = {
  result: PropTypes.string.isRequired,
}
export default Display
