import React from 'react';
import './category.css';
import fruit from '../../../images/fruit.jpg';
import misc from '../../../images/misc.jpg';
import colours from '../../../images/colours.jpg';
import drinks from '../../../images/drinks.jpg';

const IMAGES = {
  Fruit: fruit,
  Drinks: drinks,
  Misc: misc,
  Colours: colours,
};

const Card = ({ data, onClick }) => {
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card h-100">
        <img className="card-img-top" src={IMAGES[data.en]} alt="" />
        <div className="card-body">
          <h4 className="card-title">{data.en}</h4>
          <p className="card-text">{data.description}</p>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#wordsModal"
            onClick={() => onClick(data)}
          >
            Let's Learn!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
