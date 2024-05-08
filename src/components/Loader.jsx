import React from 'react';
import vid from '../images/front.mp4';

const Loader = () => {
  return (
    <div className='preLoader'>
      <video id='background-video' src={vid} autoPlay loop muted className='loader w-full h-[100%] ' />
    </div>
  );
};

export default Loader;
