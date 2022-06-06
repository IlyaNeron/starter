import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  connected: false,
  status: 'idle',
}

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    checkConnected: (state, action: PayloadAction<boolean>) => {
      state.connected = action.payload
    },
    checkConnectedRequest: (state) => {
      state.status = 'loading'
    },
  },
})

export default slice.reducer
export const { checkConnected, checkConnectedRequest } = slice.actions
