import { combineReducers } from 'redux-immutable';
import { reducer as commonReducer } from './common';

const reducer = combineReducers({
    common: commonReducer
});

export default reducer;