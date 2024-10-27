import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from './../../api';

const USERS_SLICE_NAME = 'users';

const initialState = {
  users: [],
  isFetching: false,
  error: null,
};

// users/create
export const createUserThunk = createAsyncThunk(
  `${USERS_SLICE_NAME}/post`,
  async (payload, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await API.createUser(payload);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue({
        status: err.response.status,
        message: err.response.data.errors,
      });
    }
  }
);

// users/get
export const getUsersThunk = createAsyncThunk(
  `${USERS_SLICE_NAME}/get`,
  async (payload, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await API.getUsers();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue({
        status: err.response.status,
        message: err.response.data.errors,
      });
    }
  }
);
