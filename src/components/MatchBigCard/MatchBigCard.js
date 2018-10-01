import React from 'react';
import './MatchBigCard.scss';
import MatchTips from '../MatchTips';

class MatchBigCard extends React.Component {
  render() {
    return (
      <div className="matchbigcard-rec-center">
        <div className="matchbigcard" />
        <MatchTips />
      </div>
    );
  }
}

export default MatchBigCard;
