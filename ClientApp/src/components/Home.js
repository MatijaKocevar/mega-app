import React, { Component } from 'react';
import Drumpad from './Drumpad';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <Drumpad />
    );
  }
}
