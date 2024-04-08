import { createAsyncThunk } from '@reduxjs/toolkit';
import { movieSer } from '../../service/movieSer';

export const getListGheThunk = createAsyncThunk(
  'movieReducer/movieThunk',
  async (payload, { rejectWithValue }) => {
    try {
      const data = await movieSer.getListGhe(payload);
      console.log('data: ', data);
      return data.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
