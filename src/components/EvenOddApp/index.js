// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
    isEven: true,
  }

  handleIncrement = () => {
    const randomIncrement = Math.floor(Math.random() * 101) // Generates a random number between 0 and 100

    this.setState(prevState => ({
      count: prevState.count + randomIncrement,
      isEven: (prevState.count + randomIncrement) % 2 === 0,
    }))
  }

  render() {
    const {count, isEven} = this.state
    return (
      <div className="container">
        <div className="card">
          <p>Count {count}</p>
          <p className="para">{isEven ? 'Count is Even' : 'Count is Odd'}</p>
          <button className="button" onClick={this.handleIncrement}>
            Increment
          </button>
          <p className="para">*Increment By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
