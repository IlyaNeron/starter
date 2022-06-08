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
    // TODO: what about instead of
    //      (state) => {
    //  we will use a shorter version and write
    //      state => {
    //  In prettier this is achieved with "arrowParens": "avoid"
    //  but current ESLint config doesn't like it (needs adjustments).
    checkConnectedRequest: (state) => {
      state.status = 'loading'
    },
  },
})

export const appReducer = slice.reducer
export const { checkConnected, checkConnectedRequest } = slice.actions
