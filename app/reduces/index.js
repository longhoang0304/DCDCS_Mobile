import { combineReducers } from 'redux';
import login from './authenticate.login';
import connection from './system.connection';

export default combineReducers({
  login,
  connection,
});