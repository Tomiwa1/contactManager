import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
          <div className="container">
            <a href="/" className="navbar-brand">
              <h1>{this.props.message}</h1>
            </a>
            <div>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <i className="fas fa-home"></i>Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact/add" className="nav-link">
                    <i className="fas fa-plus"></i>Add
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    <i className="fas fa-question"></i> About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
