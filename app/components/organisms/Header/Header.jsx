import React, { Component } from 'react'
import { Link } from 'react-router'

import './header.scss'

class Header extends Component {
  render() {
    return (
      <div className="o-header">
        <div className="col-xs-7 col-sm-6 col-md-2 logo">
          <h1>Company Name</h1>
        </div>

        <div className="col-sm-6 col-md-5">
          <ul className="navigation">
            <li><Link to="test1" activeClassName="active">Reports</Link></li>
            <li><Link to="test2" activeClassName="active">Clients</Link></li>
            <li><Link to="test3" activeClassName="active">Users</Link></li>
            <li><Link to="test4" activeClassName="active">Company</Link></li>
          </ul>
        </div>

        <div className="col-md-5">

        </div>
      </div>
    )
  }
}

export default Header
