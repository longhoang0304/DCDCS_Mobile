import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reduces';

const initialState = {};
const logger = createLogger();
// const thunkMiddleware = createThunkMiddleware();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware, logger),
  );
  return store;
}