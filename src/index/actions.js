export const ACTION_SET_FROM = 'SET_FROM';
export const ACTION_SET_TO = 'SET_TO';
export const ACTION_SET_IS_CITY_SELECTOR = 'SET_IS_CITY_SELECTOR';
export const ACTION_SET_CURRENT_SELECTING_LEFTCITY = 'SET_CURRENT_SELECTING_LEFTCITY';
export const ACTION_SET_CITY_DATA = 'SET_CITY_DATA';
export const ACTION_SET_IS_LOADING_CITY_DATA = 'SET_IS_LOADING_CITY_DATA';
export const ACTION_SET_IS_DATE_SELECTOR_VISIBLE = 'SET_IS_DATE_SELECTOR_VISIBLE';
export const ACTION_SET_HIGH_SPEED = 'SET_HIGH_SPEED';

export function setFrom(from) {
  return {
    type: ACTION_SET_FROM,
    payload: from,
  }
}
export function setTo(to) {
  return {
    type: ACTION_SET_FROM,
    payload: to,
  }
}

export function setIsCitySelector(isCitySelector) {
  return {
    type: ACTION_SET_IS_CITY_SELECTOR,
    payload: isCitySelector,
  }
}

export function SetCityData(cityData) {
  return {
    type: ACTION_SET_CITY_DATA,
    payload: cityData,
  }
}
export function SetIsLoadingCityData(isLoadingCityData) {  
  return {
    type: ACTION_SET_IS_LOADING_CITY_DATA,
    payload: isLoadingCityData,
  }
}

export function toggleHighSpeed() {  
  // 异步action
  return (dispatch, getState) => {
    const { highSpeed } = getState;
    // dispatch派发新的action
    dispatch({
      type: ACTION_SET_HIGH_SPEED,
      payload: highSpeed,
    })
  }
}

export function showCitySelector(currentSelectingLeftCity) {
  return (dispatch) => {
    dispatch({
      type: ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
      payload: true,
    });

    dispatch({
      type: ACTION_SET_CURRENT_SELECTING_LEFTCITY,
      payload: currentSelectingLeftCity,
    });
  }
}

export function hideCitySelector() {  
  return {
    type: ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
    payload: false,
  }
}

export function setSelectedCity(city) {  
  return (dispatch, getState) => {
    const { currentSelectingLeftCity } = getState();
    if (currentSelectingLeftCity) {
      dispatch(setFrom(city));
    } else {
      dispatch(setTo(city));
    }
  }
}

export function showDateSelector() {
  return {
    type: ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
    payload: true,
  }
}

export function hideDateSelector() {
  return {
    type: ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
    payload: false,
  }
}

export function exchangeFromTo() { 
  return (dispatch, getState) => {
    const { from, to } = getState();
    dispatch(setFrom(to));
    dispatch(setTo(from));
  }
}