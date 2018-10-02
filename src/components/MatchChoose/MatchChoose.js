import React from 'react';
import './MatchChoose.scss';
import MatchBigCard from '../MatchBigCard';
import Image from '../MatchBigCard/kastel.jpg';

class MatchChoose extends React.Component {
  render() {
    return (
      <main className="main-content">
        <MatchBigCard
          name="Kastel, 8%"
          image={Image}
        />
      </main>
    );
  }
}

export default MatchChoose;
