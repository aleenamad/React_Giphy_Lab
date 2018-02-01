import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      query:""
      result: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(e) {
    console.log(e.target.value)
    this.setState({
      query: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    const rootUrl = "../giphy-data.json"
    let result = axios.get(rootUrl)
    let self = this;
    result.then(function(data){
      this.setState({
        result: data
      });
      // displayData(data)
    });
  }
  render() {
    return (
      <div className="Search">
        <form onSubmit={this.handleSubmit}>
          <label>
              <h3>Giphy Name:</h3>
            <input value={this.state.query} name="name"
              onChange={this.handleChange}
                />
          </label>
            <input type="submit" value="Search" />
            <h3>{this.state.result[0].images.fixed_height.url} alt="gif"</h3>
          </form>

      </div>
    );
  }
}

export default Search;
