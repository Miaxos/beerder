import React from 'react';
import SideTopBar from './SideTopBar';
import './SideBar.scss';

class SideBar extends React.Component {
  render() {
    return (
      <aside className="sidebar">
        <SideTopBar />
      </aside>
    );
  }
}

export default SideBar;
