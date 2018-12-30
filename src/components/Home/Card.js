import React from 'react';
import fruit from "../../images/fruit.jpg";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card">
          <img className="card-img-top" src={fruit} alt=""/>
            <div className="card-body">
              <h4 className="card-title">Fruit</h4>
              <p className="card-text">Learn the greek words for the most common fruit.</p>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary">Let's Learn!</a>
            </div>
        </div>
      </div>
    );
  }
}
