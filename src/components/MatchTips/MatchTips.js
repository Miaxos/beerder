import React from 'react';
import './MatchTips.scss';
import ButtonRounded from '../Button/ButtonRounded';

class MatchTips extends React.Component {
  render() {
    return (
      <div className="matchtips">
        <ButtonRounded
          style={{ color: 'red' }}
          icon="times"
          onClick={() => alert('no')}
        />
        <ButtonRounded
          style={{ color: 'lightgreen' }}
          icon="heart"
          onClick={() => alert('yes')}
        />
      </div>
    );
  }
}

export default MatchTips;
