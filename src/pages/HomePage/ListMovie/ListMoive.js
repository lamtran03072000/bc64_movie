import React from 'react';

const ListMoive = () => {
  return (
    <div className="container mx-auto py-5">
      <h3 className="text-xl font-medium">Danh sách phim</h3>
      {/* Danh sách phim */}
      <div className="grid grid-cols-4 gap-9">
        {/* card phim */}
        <div className="border rounded">
          <div className="h-96">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNjQwZDIyNjAtZGQxMC00OTUwLWFiOWYtNzg2NDc5Mjc1MDQ5XkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_.jpg"
              className="w-full h-full object-cover rounded"
              alt=""
            />
          </div>
          <div className="p-3 space-y-2">
            <p className="font-medium">Tên phim</p>
            <p className="text-sm text-gray-400">Description</p>
          </div>
        </div>
        <div className="border rounded">
          <div className="h-96">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNjQwZDIyNjAtZGQxMC00OTUwLWFiOWYtNzg2NDc5Mjc1MDQ5XkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_.jpg"
              className="w-full h-full object-cover rounded"
              alt=""
            />
          </div>
          <div className="p-3 space-y-2">
            <p className="font-medium">Tên phim</p>
            <p className="text-sm text-gray-400">Description</p>
          </div>
        </div>
        <div className="border rounded">
          <div className="h-96">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNjQwZDIyNjAtZGQxMC00OTUwLWFiOWYtNzg2NDc5Mjc1MDQ5XkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_.jpg"
              className="w-full h-full object-cover rounded"
              alt=""
            />
          </div>
          <div className="p-3 space-y-2">
            <p className="font-medium">Tên phim</p>
            <p className="text-sm text-gray-400">Description</p>
          </div>
        </div>
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
