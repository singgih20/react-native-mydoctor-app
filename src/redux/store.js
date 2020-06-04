import {createStore} from 'redux';

const initialState = {
  loading: true,
  name: 'Singgih',
  address: 'Bandung',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
    };
  }
  return state;
};

const store = createStore(reducer);
export default store;
