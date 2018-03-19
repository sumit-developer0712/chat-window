import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import chatReducer from './reducers/chatReducer';

const rootReducer = combineReducers({
	chatReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
