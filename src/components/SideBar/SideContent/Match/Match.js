import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../../MatchBigCard/kastel.jpg';
import './Match.scss';

class Match extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
  };

  static defaultProps = {
    name: 'Kastel',
    image: Image,
  }

  render() {
    const { name, image } = this.props;
    return (
      <div className="match">
        <div
          className="photo"
          style={{ 'background-image': `url('${image}')` }}
        >
          <span className="photo-title">{name}</span>
        </div>
      </div>
    );
  }
}

export default Match;
