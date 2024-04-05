import { createSlice } from '@reduxjs/toolkit';
import { loginThunk } from './userThunk';
import { userLocal } from '../../service/userLocal';
import { message } from 'antd';

const initialState = {
  infoUser: userLocal.get(),
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    logOutAction: (state, action) => {
      // xoá redux
      state.infoUser = null;
      // xoá localstorage
      userLocal.delete();
    },
  },
  //   Xử lý action bất đồng bộ
  extraReducers: (builder) => {
    // fulfilled : Thành công , pending : chờ , rejected : thất bại
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        if (action.payload) {
          state.infoUser = action.payload;
          //Lưu info user xuống localstorage
          userLocal.set(action.payload);
        }
      })
      .addCase(loginThunk.pending, (state, action) => {})
      .addCase(loginThunk.rejected, (state, action) => {
        console.log('thất bại');
      });
  },
});

export const { logOutAction } = userSlice.actions;

export default userSlice.reducer;
