import React from 'react';
import './MatchBigCard.scss';
import MatchTips from '../MatchTips';

class MatchBigCard extends React.Component {
  render() {
    return (
      <div className="matchbigcard-rec-center">
        <div className="matchbigcard">
          Match big card
        </div>
        <MatchTips />
      </div>
    );
  }
}

export default MatchBigCard;
