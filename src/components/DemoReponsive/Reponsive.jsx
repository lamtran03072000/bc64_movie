import React from 'react';
import { ReponsiveDT, ReponsiveMb, ReponsiveTl } from '../../HOC/reponsive';
import ReponsiveDesktop from './ReponsiveDesktop';
import ReponsiveTablet from './ReponsiveTablet';
import ReponsiveMobile from './ReponsiveMobile';

const Reponsive = () => {
  return (
    <div>
      {/* desk top */}
      <ReponsiveDT>
        <ReponsiveDesktop />
      </ReponsiveDT>
      {/* tablet */}
      <ReponsiveTl>
        <ReponsiveTablet />
      </ReponsiveTl>
      {/* mobile */}
      <ReponsiveMb>
        <ReponsiveMobile />
      </ReponsiveMb>
    </div>
  );
};

export default Reponsive;
