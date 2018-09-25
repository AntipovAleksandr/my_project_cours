import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div >
        <nav>
            <Link to="/">Home</Link>
            <Link to="/sign_in">Sign In</Link>
            <Link to="/sign_up">Sign Up</Link>
            <Link to="/learn_more"></Link>
            <Link to="/users"></Link>
        </nav>
          {this.props.children}
      </div>
    );
  }
}

export default withRouter(App);
