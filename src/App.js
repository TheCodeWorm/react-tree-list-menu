import React, { Component } from 'react';
import TreeListMenu from './components/TreeListMenu/TreeListMenu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Tree List Menu</h1>
        </header>
        <body>
          <div className="tree-list-menu">
            <TreeListMenu />
          </div>
        </body>
      </div>
    );
  }
}

export default App;
