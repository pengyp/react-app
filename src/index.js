import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Index from './pages/index';

export default class IndexRouter extends Component {
  render() {
    return (
      <Router>
        <Index />
      </Router>
    )
  }
}

ReactDOM.render(<IndexRouter />, document.getElementById('root'));
serviceWorker.unregister();
