import {Component} from 'react'

class Initial extends Component {
  render() {
    const {initial, bgColor} = this.props
    return (
      <div className={`initial ${bgColor}`}>
        <p>{initial}</p>
      </div>
    )
  }
}

export default Initial
