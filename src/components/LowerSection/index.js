import {Component} from 'react'
import './index.css'

class LowerSection extends Component {
  render() {
    return (
      <div className="enteredPasswords">
        <div className="top">
          <div className="countSec">
            <h1>Your Passwords</h1>
            <div className="countWrap">
              <p className="count">2</p>
            </div>
          </div>
          <div className="searchBar">
            <img
              id="searchIcon"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
            />
            <input type="search" placeholder="Search" />
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="showBar">
            <input id="showBox" type="checkbox" />
            <p>
              <label htmlFor="showBox">Show Passwords</label>
            </p>
          </div>
          <div className="displayBar">
            <div className="displayBox">
              <div className="initialWrap">
                <div className="initial">
                  <p>Y</p>
                </div>
                <div className="side">
                  <p>youtube.com</p>
                  <p>rahul</p>
                  <p>************</p>
                </div>
              </div>
              <div>
                <img
                  className="delImg"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LowerSection
