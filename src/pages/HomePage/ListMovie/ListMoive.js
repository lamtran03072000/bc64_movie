import React, { useEffect, useState } from 'react';
import { movieSer } from '../../../service/movieSer';
import { useNavigate } from 'react-router-dom';

const ListMoive = () => {
  const [dataMovieList, setDataMovieList] = useState();
  const navigate = useNavigate();
  const fetchListMovies = async () => {
    try {
      const data = await movieSer.getListMovies();
      let movieList = data.data.content;
      setDataMovieList(movieList);
    } catch (error) {
      console.log('error: ', error);
    }
  };
  useEffect(() => {
    // call api
    fetchListMovies();
  }, []);
  const navigatePageDetail = (id) => {
    navigate(`detail-movie/${id}`);
  };
  const renderListMovies = () => {
    // optional chaining operator

    return dataMovieList?.map((movie) => {
      return (
        <div
          onClick={() => {
            navigatePageDetail(movie.maPhim);
          }}
          key={movie.maPhim}
          className="border rounded"
        >
          <div className="h-96">
            <img
              src={movie.hinhAnh}
              className="w-full h-full object-cover rounded"
              alt=""
            />
          </div>
          <div className="p-3 space-y-2">
            <p className="font-medium">{movie.tenPhim}</p>
            <p className="text-sm text-gray-400">
              {movie.moTa.substring(0, 50)}...
            </p>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container mx-auto py-5">
      <h3 className="text-xl font-medium">Danh sách phim</h3>
      {/* Danh sách phim */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-9">
        {/* card phim */}
        {renderListMovies()}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ListMoive;
