import React from 'react';
import Match from './Match';
import './SideContent.scss';

class SideContent extends React.Component {
  render() {
    return (
      <div className="sidecontent">
        <Match />
        <Match />
        <Match />
        <Match />
        <Match />
      </div>
    );
  }
}

export default SideContent;
