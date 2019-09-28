import React, { Component } from 'react';
import Dashboard from "./Dashboard"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userN: "",
      userP: "",
      username: 'rose',
      passWord: 'aera123',
      login: false
    }
  }

  handleLogin = (e) => {
    e.preventDefault();
    if(this.state.userN === this.state.username && this.state.userP === this.state.passWord) {
      this.setState({login: true});
    }else {
      this.setState({login: false});
      alert("something doesn't match")
    }
  }
  render() {
    if (!this.state.login) {
      return(
        <center>
          <div>Username:<input type="text" onChange ={e => this.setState({userN: e.target.value})}/></div>
          <div>PassWord<input type="password" onChange ={e => this.setState({userP: e.target.value})}/></div>
          <div><button onClick = {e => this.handleLogin(e)}>Login</button></div>
        </center>
      )
    } else {
      return(
        <div>
          <Dashboard name ={this.state.userN}/>
        </div>
      )
    }
  }
}
  export default App;