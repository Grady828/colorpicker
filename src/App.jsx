import React, { Component } from 'react'

export class App extends Component {
  state = {
    Hue: Math.floor(Math.random() * 360),
    Saturation: Math.floor(Math.random() * 100),
    Lightness: Math.floor(Math.random() * 100),
  }

  hueHandler = event => {
    this.setState({
      Hue: event.target.value,
    })
  }

  satHandler = event => {
    this.setState({
      Saturation: event.target.value,
    })
  }

  lightHandler = event => {
    this.setState({
      Lightness: event.target.value,
    })
  }

  randomizer = () => {
    this.setState({
      Hue: Math.floor(Math.random() * 360),
      Saturation: Math.floor(Math.random() * 100),
      Lightness: Math.floor(Math.random() * 100),
    })
  }

  render() {
    return (
      <body>
        <h1
          style={{
            backgroundColor: `hsl(${this.state.Hue} , ${this.state.Saturation}% , ${this.state.Lightness}%`,
          }}
        >
          Color Picker
        </h1>

        <div>
          <label>
            <h2>
              Hue {this.state.Hue}
              <input
                type="range"
                onChange={this.hueHandler}
                min="0"
                max="360"
                value={this.state.Hue}
              />
            </h2>

            <h2>
              Saturation {this.state.Saturation}
              <input
                type="range"
                onChange={this.satHandler}
                min="0"
                max="100"
                value={this.state.Saturation}
              />
            </h2>

            <h2>
              Lightness {this.state.Lightness}
              <input
                type="range"
                onChange={this.lightHandler}
                min="0"
                max="100"
                value={this.state.Lightness}
              />
            </h2>

            <button onClick={this.randomizer}> Randomize</button>
          </label>
        </div>
      </body>
    )
  }
}
