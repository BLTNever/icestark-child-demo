import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    slideFlag: 1,
    cityInfo:{
      cityShopId: '990',
      code: 'C500100',
      name: '重庆市'
    }
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.SLIDE_FLAG:
            return state.set('slideFlag', action.flag);
        case constants.SET_CITY:
            return state.set('cityInfo', action.cityInfo);    
        default:
            return state;
    }
}