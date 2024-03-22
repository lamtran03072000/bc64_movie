import React from 'react';
import { Outlet } from 'react-router-dom';
import iconlogin from '../assets/iconlogin.json';
import Lottie from 'lottie-react';
const AuthTemplate = () => {
  return (
    <div className="flex w-screen h-screen">
      <div className="w-1/2  h-full">
        <Lottie animationData={iconlogin} />
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthTemplate;
