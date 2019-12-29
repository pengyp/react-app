import React, { Component } from 'react';
import RouteModels from '../router';
import IndexMenu from '../components/IndexMenu';
import "./index.scss";

// 
export default class IndexRouter extends Component {
  render() {
    return (
      <div className={"pages-index"}>
        <div className={"fff"}>indexView</div>
        <IndexMenu />
        <RouteModels />
      </div>
    )
  }
}

