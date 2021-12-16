import {createStore, combineReducers} from 'redux';
import {clientsReducer} from './reducers/clients';

const rootReducer = combineReducers({
  clients: clientsReducer,
});

const store = createStore(rootReducer);

export default store;
