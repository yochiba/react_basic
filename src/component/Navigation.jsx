import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  handleCount(countType) {
    let currentCount = this.state.count;

    if (countType) {
      currentCount += 1;
    } else {
      currentCount += 1;
    }

    
    this.setState({count: currentCount});
  }

  render() {
    return (
      <div>
        <Link to='/form'>Form</Link>
        <Link to='/form-confirm'>FormConfirm</Link>

        <h1>{ this.state.count }</h1>
        <button onClick={() => {this.handleCount(true)}}>+</button>
        <button onClick={() => {this.handleCount(false)}}>-</button>
      </div>
    );
  }
}

export default Navigation;