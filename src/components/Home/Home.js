import React from 'react';
import Card from './Card';
import './home.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron my-4">
          <h1 className="display-3">Learn Greek</h1>
          <p className="lead">Welcome to learning greek for beginners!</p>
        </header>
        <div className="row text-center">
          <Card />
        </div>
      </div>
    );
  }
}
