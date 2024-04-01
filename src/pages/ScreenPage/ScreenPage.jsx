import { message } from 'antd';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const ScreenPage = () => {
  const { maLichChieu } = useParams();
  const navigate = useNavigate();
  const { infoUser } = useSelector((state) => state.userReducer);
  console.log('infoUser: ', infoUser);
  useEffect(() => {
    if (!infoUser) {
      console.log('yes');
      message.error('Vui lòng đăng nhập để được đặt vé');
      navigate('/auth/login');
    }
  }, []);
  console.log('maLichChieu: ', maLichChieu);
  return <div>ScreenPage</div>;
};

export default ScreenPage;
