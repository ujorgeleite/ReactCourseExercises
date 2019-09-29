import React, { Component } from 'react';

import './App.css';
import ValidationComponent from './Validation/ValidationComponent';
import CharComponent from './Char/CharComponent';
class App extends Component {
    state = {
        textInputed: ''
    }

    changeOutputHandler = (event) => {
        this.setState({ textInputed: event.target.value.toUpperCase() });
    }

    removeLetter = (event) => {
        const arrayForFilter = [...this.state.textInputed.split('')]
        const inputedText = [...arrayForFilter.filter(item => item !== event.target.textContent)]
        const newState = inputedText.length > 0 ? [...inputedText] : [];
        this.setState({ textInputed: newState.join('') });
    }
    render() {
        const renderList = this.state.textInputed.length > 0 ?
            this.state.textInputed.split('').map((letter, index) => {
                if (letter.trim().length > 0) {
                    return <CharComponent char={letter} key={`${index}-${letter}`} click={this.removeLetter}></CharComponent>
                }
            }) : '';


        return (
            <div className="App" >
                <input type="text" onChange={(event) => this.changeOutputHandler(event)} value={this.state.textInputed} />
                <p>Text entered: {this.state.textInputed.length}</p>
                <ValidationComponent outputLenght={this.state.textInputed.length}></ValidationComponent>
                <ul>
                    {renderList}
                </ul>
            </div>
        );
    }
}

export default App;