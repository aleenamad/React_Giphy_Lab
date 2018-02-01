import React, {Component} from 'react';
import Search from './Search';
import Results from './Results';

class SearchContainer extends Component {
  constructor(){
    super()
    this.state = {
      query: '',
      completeSearch: false,
      results: [
      {
        "type": "gif",
        "id": "iuHaJ0D7macZq",
        "url": "http://giphy.com/gifs/cat-day-tomorrow-iuHaJ0D7macZq",
        "source": "https://www.reddit.com/r/CatGifs/comments/5f0h9a/tomorrow_is_legs_day/",
        "rating": "pg",
        "images": {
          "fixed_height": {
            "url": "http://media4.giphy.com/media/iuHaJ0D7macZq/200.gif"
          }
      }
    },
    {
      "type": "gif",
      "id": "Z1kpfgtHmpWHS",
      "url": "http://giphy.com/gifs/cat-way-make-Z1kpfgtHmpWHS",
      "source": "http://shewhoseeks.blogspot.com/2016/03/cat-gifs-that-make-me-laugh-way-more.html",
      "rating": "g",
      "images": {
        "fixed_height": {
          "url": "http://media4.giphy.com/media/Z1kpfgtHmpWHS/200.gif"
        }
      }
    }
  ]

    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onInputChange(event) {
    this.setState({
      query: event.target.value
    })
  }
  onSubmit() {
    console.log(this.state.query);
    this.setState({
      completeSearch: true
    })
  }
  render() {
    if (this.state.completeSearch) {
      return (
        <Results results={this.state.results}/>
      )
    } else {
      return (
        <div>
          <Search
            onInputChange={this.onInputChange}
            onSubmit={this.onSubmit}
          />
        </div>
      )
    }
  }
}

export default SearchContainer;
