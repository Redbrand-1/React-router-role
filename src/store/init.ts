import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { role }from './reducer/app/role'
import { user }from './reducer/app/user'
import { activeRouters  }from './reducer/app/activeRouter'

const rootReducer = combineReducers({
  role , user , activeRouters 
})


const middleware = [thunk];
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));