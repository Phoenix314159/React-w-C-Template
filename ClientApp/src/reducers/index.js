import { combineReducers } from 'redux';
import somethingReducer from './somethingReducer';
import dudeReducer from './dudeReducer';
import changeImageReducer from './changeImageReducer';

export default combineReducers({
    something: somethingReducer,
    dude: dudeReducer,
    changeImage: changeImageReducer
})

