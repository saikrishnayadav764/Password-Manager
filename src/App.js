/* eslint-disable react/destructuring-assignment */
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Initial from './components/Initial'
import './App.css'

class App extends Component {
  state = {
    passwordList: [],
    website: '',
    username: '',
    password: '',
    searchValue: '',
    showPasswords: false,
  }

  websiteHandler = e => {
    this.setState({website: e.target.value})
  }

  usernameHandler = e => {
    this.setState({username: e.target.value})
  }

  passwordHandler = e => {
    this.setState({password: e.target.value})
  }

  submitHandler = e => {
    e.preventDefault()
    const {passwordList, website, username, password} = this.state
    const enteredInputs = {
      id: uuidv4(),
      unique: passwordList.length + 1,
      website,
      username,
      password,
    }
    console.log(this.state.passwordList)
    if (website && username && password) {
      this.setState(prevState => ({
        passwordList: [...prevState.passwordList, enteredInputs],
        website: '',
        username: '',
        password: '',
      }))
    }
  }

  delete = id => {
    const {passwordList} = this.state
    const newPasswordList = passwordList.filter(item => item.id !== id)
    this.setState({passwordList: newPasswordList})
  }

  ChangeHandler = e => {
    this.setState({searchValue: e.target.value})
  }

  checkboxHandler = e => {
    this.setState({showPasswords: e.target.checked})
  }

  giveNewColor = unique => {
    const myColors = [
      'BlueSapphire',
      'Amber',
      'EmeraldGreen',
      'BurntOrange',
      'Teal',
      'Crimson',
      'DodgerBlue',
    ]
    return myColors[unique % myColors.length]
  }

  render() {
    const {
      passwordList,
      website,
      username,
      password,
      searchValue,
      showPasswords,
    } = this.state

    const filteredpasswordList = passwordList.filter(item =>
      item.website.toLowerCase().includes(searchValue.toLowerCase()),
    )

    return (
      <div className="container">
        <div className="navbar">
          <img
            alt="app logo"
            id="logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          />
        </div>
        <div className="formWrap">
          <form onSubmit={this.submitHandler} className="wrap">
            <h1 className="addHead">Add New Password</h1>
            <div className="inp website">
              <img
                className="im"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <input
                onChange={this.websiteHandler}
                type="text"
                placeholder="Enter Website"
                value={website}
              />
            </div>
            <div className="inp username">
              <img
                className="im"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <input
                onChange={this.usernameHandler}
                type="text"
                placeholder="Enter Username"
                value={username}
              />
            </div>
            <div className="inp password">
              <img
                className="im"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <input
                onChange={this.passwordHandler}
                type="password"
                placeholder="Enter Password"
                value={password}
              />
            </div>
            <div className="submitWrap">
              <button className="submit" type="submit">
                Add
              </button>
            </div>
          </form>
          <div className="passImage">
            <img
              className="noDisplay"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
            />
          </div>
        </div>
        <div className="enteredPasswords">
          <div className="top">
            <div className="countSec">
              <h1>Your Passwords</h1>
              <div className="countWrap">
                <p className="count">{passwordList.length}</p>
              </div>
            </div>
            <div className="searchBar">
              <img
                id="searchIcon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                onChange={this.ChangeHandler}
                type="search"
                placeholder="Search"
              />
            </div>
          </div>
          <hr />
          <div className="bottom">
            <div className="showBar">
              <input
                onChange={this.checkboxHandler}
                id="showBox"
                type="checkbox"
              />
              <p>
                <label htmlFor="showBox">Show Passwords</label>
              </p>
            </div>
            {filteredpasswordList.length !== 0 ? (
              <ul className="displayBar">
                {filteredpasswordList.map(item => (
                  <li key={item.id} className="displayBox">
                    <div className="initialWrap">
                      <Initial
                        initial={item.username[0]}
                        bgColor={this.giveNewColor(item.unique)}
                      />
                      <div className="side">
                        <p>{item.website}</p>
                        <p>{item.username}</p>
                        {showPasswords ? (
                          <p>{item.password}</p>
                        ) : (
                          <img
                            className="starName"
                            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                            alt="stars"
                          />
                        )}
                      </div>
                    </div>
                    <div>
                      <button
                        data-testid="delete"
                        onClick={() => this.delete(item.id)}
                        className="delBtn"
                        type="button"
                      >
                        <img
                          alt="delete"
                          className="delImg"
                          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                        />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="erroBar">
                <div className="errorWrap">
                  <img
                    alt="no passwords"
                    className="errorImage"
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  />
                  <p>No Passwords</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
