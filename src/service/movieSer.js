import { MA_NHOM, http } from './urlConfig';

export const movieSer = {
  getBannerMovie: () => {
    let uri = '/api/QuanLyPhim/LayDanhSachBanner';
    return http.get(uri);
  },
  getListMovies: () => {
    let uri = `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${MA_NHOM}`;
    return http.get(uri);
  },
  getDetailMovie: (idMovie) => {
    let uri = `/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idMovie}`;
    return http.get(uri);
  },
  getScheduleMovie: (idMovie) => {
    let uri = `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idMovie}`;
    return http.get(uri);
  },
};
