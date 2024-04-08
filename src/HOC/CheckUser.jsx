import React, { useEffect } from 'react';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const CheckUser = ({ children }) => {
  const navigate = useNavigate();
  const { infoUser } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (!infoUser) {
      message.error('Vui lòng đăng nhập để được đặt vé');
      navigate('/auth/login');
    }
  }, [infoUser]);
  return <>{children}</>;
};

export default CheckUser;
