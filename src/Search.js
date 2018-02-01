import React, {Component} from 'react';

class Search extends Component {
  constructor(){
    super()
    this.state = {
      query: ''
    }
  }
  render() {
    return (
      <div>
        <input type="text" onChange={ this.props.onInputChange }/>
        <button onClick={this.props.onSubmit}>Search</button>
      </div>
    )
  }
}

export default Search;
