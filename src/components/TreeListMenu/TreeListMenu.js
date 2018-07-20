import React, { Component } from 'react';
import './tree-list-menu.css';

class TreeListMenu extends Component {
  render() {
    return (
      <div>
        <div className = "search-tree-list"></div>
        <div className = "tree-list-elements"></div>
      </div>
    );
  }
}

export default TreeListMenu;