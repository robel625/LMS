import { combineReducers } from 'redux';
import auth from './authReducer';
import alert from './alertReducer';
import theme1 from './themeReducer1';
import themeReducer from './themeReducer';

export default combineReducers({
  auth,
  alert,
  theme1,
  themeReducer,
});
