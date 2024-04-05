import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { userSer } from '../../service/userSer';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/userReducer/userThunk';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formLogin = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
    },

    onSubmit: (value) => {
      const navigateCus = () => {
        navigate('/');
      };
      dispatch(loginThunk({ value, navigateCus }));
    },
    validationSchema: yup.object().shape({
      taiKhoan: yup
        .string()
        .required('Tài khoản không được để trống')
        .min(4, 'Tài khoản ít phải là 4 chữ cái'),
      matKhau: yup
        .string()
        .required('Mật Khẩu không được để trống')
        .min(3, 'Mật khẩu ít phải là 3 chữ cái'),
    }),
  });
  return (
    <div>
      <form
        onSubmit={formLogin.handleSubmit}
        action=""
        className="border p-3 rounded-md space-y-3"
      >
        <h3 className="text-2xl font-medium">Đăng nhập</h3>
        <div>
          <label className="text-sm font-medium" htmlFor="">
            Tài Khoản
          </label>
          <input
            type="text"
            name="taiKhoan"
            id="taiKhoan"
            className="border rounded p-2 w-full"
            onChange={formLogin.handleChange}
          />
          <p className="text-red-500 h-3">{formLogin.errors.taiKhoan}</p>
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="">
            Mật khẩu
          </label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            name="matKhau"
            id="matKhau"
            onChange={formLogin.handleChange}
          />
          <p className="text-red-500  h-3">{formLogin.errors.matKhau}</p>
        </div>
        <button className="bg-blue-500 text-white rounded p-2 ">
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
