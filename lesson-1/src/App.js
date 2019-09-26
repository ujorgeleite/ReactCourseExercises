import React, { Component } from 'react';
import './App.css';
import UserOutput from './User/Output/UserOutput'
import UserInput from './User/Input/UserInput'

class App extends Component {


  changeStateFirstHandler = (event) => {
    this.setState({ usernameFirst: event.target.value })
  }

  changeStateSecondHandler = (event) => {
    this.setState({ usernameSecond: event.target.value })
  }

  changeStateThirdHandler = (event) => {
    this.setState({ usernameThird: event.target.value })
  }

  state = {
    usernameFirst: 'Jorge',
    usernameSecond: 'Fernando',
    usernameThird: 'Manuel'
  }
  render() {
    const divStyle = {
      border: '1px solid red',
      borderRadius: '25px',
      margin: '15px',
      paddingLeft: '12px',
      paddingRight: '12px',
      backgroundColor: 'white',
      color: 'brown',
      fontWeight: 'bold'
    }

    
    return (

      <div className="App">
       
          <UserInput username={ this.state.usernameFirst } change={ this.changeStateFirstHandler }></UserInput>
          <UserOutput style={ divStyle } username={ this.state.usernameFirst }></UserOutput>
          <UserInput username={ this.state.usernameSecond } change={ this.changeStateSecondHandler }></UserInput>
          <UserOutput style={ divStyle } username={ this.state.usernameSecond }></UserOutput>
          <UserInput username={ this.state.usernameThird } change={ this.changeStateThirdHandler }></UserInput>
          <UserOutput style={ divStyle } username={ this.state.usernameThird }></UserOutput>

      </div>
    );
  }
}

export default App;
