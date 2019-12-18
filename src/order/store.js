import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducers from './reducers'
// thunk支持异步的中间件action
import thunk from 'redux-thunk'
export default createStore(
  combineReducers(reducers),
  // store 默认值
  {

  },
  applyMiddleware(thunk)
);
