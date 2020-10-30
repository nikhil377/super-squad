import React, { Component } from 'react'
import '../styles/index.css'
import CharacterList from './CharacterList';
export default class App extends Component {
  render() {
    return (
      <div className="App"> 
        <h2>SuperSquad</h2>
        <CharacterList/>
      </div>
    )
  }
}

