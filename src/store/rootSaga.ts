import { all, spawn } from 'redux-saga/effects'
import { appWatcherSaga } from './app/saga'

export function* rootSaga() {
  const sagas = [appWatcherSaga]

  yield all(sagas.map(spawn))
}
