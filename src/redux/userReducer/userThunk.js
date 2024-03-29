import { createAsyncThunk } from '@reduxjs/toolkit';
import { userSer } from '../../service/userSer';

export const loginThunk = createAsyncThunk(
  'userReducer/loginThunk',
  async (payload, { rejectWithValue }) => {
    try {
      const data = await userSer.postLogin(payload);
      let infoUser = data.data.content;
      return infoUser;
    } catch (error) {
      console.log('error: ', error);
    }
  },
);
