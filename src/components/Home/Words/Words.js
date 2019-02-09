import React from 'react';
import './words.css';

const Words = ({ category }) => {
  return (
    <div className="modal fade text-dark" id="wordsModal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border border-secondary">
          <div className="modal-header bg-secondary text-white">
            <h5 className="modal-title">
              {category && `${category.en} - ${category.el}`}
            </h5>
            <button className="close" data-dismiss="modal" />
            <span>&times;</span>
          </div>
          <div className="modal-body">
            <ul className="list-group">
              {category &&
                category.words.map(word => {
                  return (
                    <li key={word.en} className="list-group-item">
                      {`${word.en} - ${word.el}`}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary btn-block" data-dismiss="modal">
              Got it!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Words;
