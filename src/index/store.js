import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducers from './reducers'
// thunk支持异步的中间件action
import thunk from 'redux-thunk'
export default createStore(
  combineReducers(reducers),
  // store state 默认值
  {
    from: '北京',
    to: '上海',
    isCitySelector: false,
    currentSelectingLeftCity: false,
    cityData: null,
    isLoadingCityData: false,
    isDateSelectorVisible: false,
    highSpeed: false,
  },
  applyMiddleware(thunk)
);
