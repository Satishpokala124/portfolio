import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from 'src/utils';

const initialState = {
  status: STATUS.IDLE,
};

export const starsSlice = createSlice({
  name: 'stars',
  initialState,
  reducers: {
    setStarsStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setStarsStatus } = starsSlice.actions;

export default starsSlice.reducer;
