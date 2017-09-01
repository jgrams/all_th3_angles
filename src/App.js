import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { angle: 0 };
  }

  _onMouseMove(e) {
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    this.setState({ angle: Math.atan2((e.screenY - (window.innerWidth/2)), (e.screenX - (window.innerHeight/2))) * 180 });
  }

  render() {
    const { angle } = this.state;
    return (
      <div className="App" onMouseMove={this._onMouseMove.bind(this)}>
        <h1>All the Angles</h1>
        <div>
          Angle: { Math.round(angle) }
        </div>
      </div>
    );
  }
}

export default App;
