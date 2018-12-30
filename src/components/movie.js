import React from 'react';
import Image from './image';
import { Jumbotron, Button } from 'react-bootstrap';

export default class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.data.title,
      trailer: this.props.data.trailer,
    };
  }

  onClick = () => {
    this.setState(prevState => {
      return {
        title: 'what',
        trailer: this.state.trailer + '?autoplay=1',
      };
    });
  };

  render() {
    return (
      <Jumbotron>
        <h1>{this.state.title}</h1>
        <button onClick={this.onClick}>Click Me!</button>
        <p>{this.props.data.genre}</p>
        <img
          src={this.props.data.image}
          style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}
        />
        <br />
        <iframe
          width="560"
          height="315"
          src={'https://www.youtube.com/embed/' + this.state.trailer}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Jumbotron>
    );
  }
}
