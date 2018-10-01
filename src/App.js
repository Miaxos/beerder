import React, { Component } from 'react';
import './styles/index.scss';
import SideBar from './components/SideBar';
import MatchChoose from './components/MatchChoose';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <MatchChoose />
      </div>
    );
  }
}

export default App;
