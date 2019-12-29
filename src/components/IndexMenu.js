import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
export default class IndexRouter extends Component {
  render() {
    return (
      <div className={"indexMenu"} style={{ color: "#d33", borderBottom: "3px solid #d33" }}>
        <ul className="nav">
          <li><Link to="/">AppIndex</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Inbox">Inbox</Link></li>
        </ul>
        <div>
          你好吗？你配吗
        </div>
      </div>
    )
  }
}
