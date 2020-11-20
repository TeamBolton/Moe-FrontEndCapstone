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

  // const title = 'My Simple Express React Webpack Babel Setup Environment';

  render() {
    return (
      <div className="main-container">
        <div className="snapshot">
          <div className="title">Reviews</div>
          <div className="submit-review">
            <button className="review-button" type="button">Write a review</button>
          </div>
          <div className="summary">
            <div className="rating-snapshot">
              <div class="row">
                <div class="side">
                  <div>5 star</div>
                </div>
                <div class="middle">
                  <div class="bar-container">
                    <div class="bar-5"></div>
                  </div>
                </div>
                <div class="side right">
                  <div>150</div>
                </div>
                <div class="side">
                  <div>4 star</div>
                </div>
                <div class="middle">
                  <div class="bar-container">
                    <div class="bar-4"></div>
                  </div>
                </div>
                <div class="side right">
                  <div>63</div>
                </div>
                <div class="side">
                  <div>3 star</div>
                </div>
                <div class="middle">
                  <div class="bar-container">
                    <div class="bar-3"></div>
                  </div>
                </div>
                <div class="side right">
                  <div>15</div>
                </div>
                <div class="side">
                  <div>2 star</div>
                </div>
                <div class="middle">
                  <div class="bar-container">
                    <div class="bar-2"></div>
                  </div>
                </div>
                <div class="side right">
                  <div>6</div>
                </div>
                <div class="side">
                  <div>1 star</div>
                </div>
                <div class="middle">
                  <div class="bar-container">
                    <div class="bar-1"></div>
                  </div>
                </div>
                <div class="side right">
                  <div>20</div>
                </div>
              </div>
            </div>
            <div className="avg-customer-review">Average Customer Review</div>
          </div>
          <div className="bottom-control-bar">
            <div className="content-page">1–12 of 42 Reviews</div>
            <div className="sort-dropdown">Sort by: Most Recent</div>
          </div>
        </div>
        <div className="entries">
          <div className="inline-profile">
            <div className="author-name">high rockies hiker</div>
            <div className="author-location">Flagstaff, AZ</div>
            <div className="author-stats">Review 1</div>
          </div>
          <div className="content">
            <div className="ratings"></div>
            <div className="content-title">A great cold weather rain/snow boot.</div>
            <div className="content-review">The boots fit my feet snugly and comfortably. The insulation adds cushion and warmth inside and the soles are very grippy. I took them for a 5 mile hike in 25 degree weather and my feet were toasty. They were good to go hiking straight from the box with no rubbing nor time needed to break them in.</div>
            <div className="content-data-product-question">Typical Shoe Size Womens 8</div>
            <div className="content-data-recommended">✔ Yes, I recommend this product.</div>
            <div className="content-action-container">
              <div className="helpful-text">Helpful?</div>
              <div className="btn-feedback-yes">Yes · 1</div>
              <div className="btn-feedback-no">No · 1</div>
              <div className="btn-feedback-report">Report as inappropriate</div>
            </div>
          </div>
          <div className="secondary-ratings">
            <div className="content-second-ratings"></div>
          </div>
        </div>
      </div>
    )
  }

}
ReactDOM.render(<App />, document.getElementById('app'));

