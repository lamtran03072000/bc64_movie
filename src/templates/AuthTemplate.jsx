import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import iconlogin from '../assets/iconlogin.json';
import Lottie from 'lottie-react';
import { useSelector } from 'react-redux';
const AuthTemplate = () => {
  const { infoUser } = useSelector((state) => state.userReducer);
  console.log('infoUser: ', infoUser);
  const navigate = useNavigate();
  // Nếu infoUser có tồn tại => đã đăng nhập => đá về trang chủ
  useEffect(() => {
    if (infoUser) {
      navigate('/');
    }
  }, []);
  return (
    <div className="flex w-screen h-screen">
      <div className="w-1/2  h-full">
        <div className="scale-50">
          <Lottie animationData={iconlogin} />
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthTemplate;
