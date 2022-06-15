import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IAppSliceState {
  connected: boolean;
  status: 'idle' | 'loading';
}

const initialState: IAppSliceState = {
  connected: false,
  status: 'idle',
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    checkConnected: (state, action: PayloadAction<boolean>) => {
      state.connected = action.payload;
    },
    checkConnectedRequest: state => {
      state.status = 'loading';
    },
  },
});

export const appReducer = slice.reducer;
export const { checkConnected, checkConnectedRequest } = slice.actions;
