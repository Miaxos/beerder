import React from 'react';
import PropTypes from 'prop-types';
import './MatchBigCard.scss';
import MatchTips from '../MatchTips';

class MatchBigCard extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
  };

  static defaultProps = {
    name: 'Kaster',
    image: './kastel.jpg',
  }

  render() {
    const { name, image } = this.props;
    return (
      <div className="matchbigcard-rec-center">
        <div className="matchbigcard-content-rectangle">
          <div
            className="matchbigcard"
            style={{ 'background-image': `url('${image}')` }}
          >
            <span className="matchbigcard-text-description">{name}</span>
          </div>
          <MatchTips />
        </div>
      </div>
    );
  }
}

export default MatchBigCard;
