import { all, spawn } from 'redux-saga/effects'
import appWatcherSaga from './app/saga'

export default function* rootSaga() {
  const sagas = [appWatcherSaga]

  yield all(sagas.map(spawn))
}
