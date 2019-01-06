import React from 'react';
import fruit from '../../images/fruit.jpg';
import grammar from '../../images/grammar.jpg';
import colours from '../../images/colours.jpg';
import drinks from '../../images/drinks.jpg';

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this._images = {
      Fruit: fruit,
      Drinks: drinks,
      Grammar: grammar,
      Colours: colours,
    };
  }

  render() {
    const { category } = this.props;

    return (
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card">
          <img
            className="card-img-top"
            src={this._images[category.en]}
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title">{category.en}</h4>
            <p className="card-text">{category.description}</p>
          </div>
          <div className="card-footer">
            <a href="#" className="btn btn-primary">
              Let's Learn!
            </a>
          </div>
        </div>
      </div>
    );
  }
}
