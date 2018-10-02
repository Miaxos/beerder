import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faTimes, faBeer } from '@fortawesome/free-solid-svg-icons';
import './styles/index.scss';
import SideBar from './components/SideBar';
import MatchChoose from './components/MatchChoose';

// FontAwesome
library.add(faHeart);
library.add(faTimes);
library.add(faBeer);

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
