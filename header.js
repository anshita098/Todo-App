import React, { Component } from 'react';
import './styling.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to TODO APP</h2>
        </div>
        <p className="App-intro">
        Here,You can add your work
        </p>
      </div>
    );
  }
}

export default Header;
