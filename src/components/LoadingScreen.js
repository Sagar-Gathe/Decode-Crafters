import React from 'react';
import eagleImage from '../asset/images/Eagle.jpg'; 

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <img src={eagleImage} alt="Loading Eagle" className="eagle-image" />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingScreen;