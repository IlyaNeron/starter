import { delay, put, takeLatest } from 'redux-saga/effects'

import { checkConnected, checkConnectedRequest } from './slice'

export function* appWatcherSaga() {
  yield takeLatest(checkConnectedRequest.type, checkConnectedSaga)
}

function* checkConnectedSaga() {
  try {
    yield delay(3000)
    yield put(checkConnected(true))
  } catch (error) {
    console.error(error)
  }
}
