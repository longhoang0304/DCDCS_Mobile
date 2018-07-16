import { combineReducers } from 'redux';
import auth from './auth';
import connection from './system.connection';
import info from './system.info';
import user from './user';

export default combineReducers({
  auth,
  connection,
  info,
  user,
});