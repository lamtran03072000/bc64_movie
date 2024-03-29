import React from 'react';
import { useSelector } from 'react-redux';
import UserNavLogOut from './UserNavLogOut';
import UserNavogin from './UserNavogin';

const Header = () => {
  const { infoUser } = useSelector((state) => state.userReducer);
  const renderUserNav = () => {
    if (infoUser) {
      return <UserNavogin />;
    } else {
      return <UserNavLogOut />;
    }
  };
  return (
    <div className="bg-gray-900 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-medium text-2xl">BC 64</div>
        <div className="text-white">{renderUserNav()}</div>
      </div>
    </div>
  );
};

export default Header;
