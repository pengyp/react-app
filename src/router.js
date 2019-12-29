import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// 导入组件
import App from './components/App';
import About from './components/About'; // 导入About组件
import Inbox from './components/Inbox.js'; // 导入Inbox组件

// 添加路由
class RouteModels extends Component {
  render() {
    return (
      <div className={"routeModels"} >
        <Route exact path="/" component={App} />
        <Route path="/About" component={About} />
        <Route path="/Inbox" component={Inbox} />
      </div>
    )
  }
}

export default RouteModels;
