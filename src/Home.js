import React, { Component } from 'react';
import Search from './Search';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Hello World</h1>
        <h2>Search for your Giphy Below</h2>
        <Search query={''}/>
      </div>
    );
  }
}

export default Home;
