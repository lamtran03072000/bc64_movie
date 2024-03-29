import { createSlice } from '@reduxjs/toolkit';
import { loginThunk } from './userThunk';
import { userLocal } from '../../service/userLocal';

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
        state.infoUser = action.payload;
        //Lưu info user xuống localstorage
        userLocal.set(action.payload);
      })
      .addCase(loginThunk.pending, (state, action) => {})
      .addCase(loginThunk.rejected, (state, action) => {});
  },
});

export const { logOutAction } = userSlice.actions;

export default userSlice.reducer;
