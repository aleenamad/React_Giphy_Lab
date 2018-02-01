import React, {Component} from 'react';

class Results extends Component {
  render() {
    return (
      <div>
        <h3>These are the results</h3>
        {this.props.results.map((giphy) => {
          return <img src={giphy.images.fixed_height.url} alt="gif"/>
        })}
      </div>
    )
  }
}

export default Results;
