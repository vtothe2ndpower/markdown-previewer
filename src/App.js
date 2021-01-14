import React, { Component } from 'react';
import TextForm from './TextForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Markdown Previewer</h1>
        <TextForm />
      </div>
    );
  }
}

export default App;
