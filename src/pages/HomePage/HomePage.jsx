import React from 'react';
import CarouselMovie from './CarouselMovie/CarouselMovie';
import ListMoive from './ListMovie/ListMoive';
import ReponsiveTailwinds from '../../components/ReponsiveTailwinds/ReponsiveTailwinds';
const HomePage = () => {
  return (
    <div>
      <ReponsiveTailwinds />
      <CarouselMovie />
      <ListMoive />
    </div>
  );
};

export default HomePage;
