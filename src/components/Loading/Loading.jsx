import React from 'react';
import { useSelector } from 'react-redux';

const Loading = () => {
  const { isLoading } = useSelector((state) => state.loadingReducer);
  return (
    <div
      className={`w-screen h-screen bg-black fixed text-white ${
        isLoading ? '' : 'hidden'
      } top-0 left-0 z-50`}
    >
      <div className="w-full h-full flex justify-center items-center">
        <span>Loading ....</span>
      </div>
    </div>
  );
};

export default Loading;
