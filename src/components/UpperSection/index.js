import {Component} from 'react'
import './index.css'

class UpperSection extends Component {
  render() {
    return (
      <div className="formWrap">
        <form className="wrap">
          <h1 className="addHead">Add New Password</h1>
          <div className="inp website">
            <img
              className="im"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="website"
            />
            <input type="text" placeholder="Enter Website" />
          </div>
          <div className="inp username">
            <img
              className="im"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="username"
            />
            <input type="text" placeholder="Enter Username" />
          </div>
          <div className="inp password">
            <img
              className="im"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="password"
            />
            <input type="text" placeholder="Enter Password" />
          </div>
          <div className="submitWrap">
            <button className="submit" type="submit">
              Add
            </button>
          </div>
        </form>
        <div className="passImage" />
      </div>
    )
  }
}

export default UpperSection
