import { combineReducers } from 'redux'
import appReducer from './app/slice'

const rootReducer = combineReducers({
  app: appReducer,
})

export default rootReducer
