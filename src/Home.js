import React, { Component } from 'react';

import './App.css';
import SearchContainer from './SearchContainer';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Hello World</h1>
        <h2>Search for your Giphy Below</h2>
        <SearchContainer />
      </div>
    );
  }
}

export default Home;
