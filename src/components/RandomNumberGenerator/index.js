// Write your code here
import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generateRandom = () => {
    this.setState({number: Math.floor(Math.random() * 101)})
  }

  render() {
    const {number} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="title">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="btn" onClick={this.generateRandom}>
            Generate
          </button>
          <p className="display-number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
