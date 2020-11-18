import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsData: []
    }
  }

  componentDidMount() {
    axios.get('/api/products/review')
      .then((response) => {
        this.setState({ reviewsData: response })
      })
      .catch((err) => {
        console.log('Error with GET request: ', err)
      })
  }

  render() {
    return (
      <div>{this.state.reviewsData}</div>
    )
  }

  ReactDOM.render(<App />, document.getElementById('app'));
}
8