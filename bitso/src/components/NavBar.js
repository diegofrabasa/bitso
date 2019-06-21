import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/LogIn">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
        )
    }
}

export default NavBar
