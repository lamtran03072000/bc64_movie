import { http } from './urlConfig';

export const movieSer = {
  getBannerMovie: () => {
    let uri = '/api/QuanLyPhim/LayDanhSachBanner';
    return http.get(uri);
  },
};
