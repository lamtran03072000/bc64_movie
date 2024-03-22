import { http } from './urlConfig';

export const userSer = {
  postLogin: (data) => {
    let uri = '/api/QuanLyNguoiDung/DangNhap';
    return http.post(uri, data);
  },
};
