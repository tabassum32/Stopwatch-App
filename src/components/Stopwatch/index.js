// Write your code here

import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    timeElapsed: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  minutes = () => {
    const {timeElapsed} = this.state
    const minute = Math.floor(timeElapsed / 60)

    if (minute < 10) {
      return `0${minute}`
    }
    return minute
  }

  seconds = () => {
    const {timeElapsed} = this.state
    const second = Math.floor(timeElapsed % 60)

    if (second < 10) {
      return `0${second}`
    }
    return second
  }

  onStartBtn = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
  }

  updateTime = () => {
    this.setState(prevState => ({timeElapsed: prevState.timeElapsed + 1}))
  }

  onStopBtn = () => {
    clearInterval(this.timeInterval)
  }

  onResetBtn = () => {
    this.setState(prevState => ({timeElapsed: 0}))
    clearInterval(this.timeInterval)
  }

  render() {
    //

    const time = `${this.minutes()}:${this.second()}`
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="app-heading">Stopwatch</h1>
          <div className="app-card-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stop-watch"
            />
            <p className="timer">Timer</p>
          </div>
          <h1 className="Stopwatch">{time}</h1>
          <div className="button-container">
            <button
              type="button"
              className="start-button"
              onClick={this.onStartBtn}
            >
              Start
            </button>
            <button
              type="button"
              className="stop-button"
              onClick={this.onStopBtn}
            >
              Stop
            </button>
            <button
              type="button"
              className="reset-button"
              onClick={this.onResetBtn}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
