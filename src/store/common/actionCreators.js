import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});
export const changSlide = (flag) => ({
    type: constants.SLIDE_FLAG,
    flag
})
export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});
export const setCity = (cityInfo) => ({
  type: constants.SET_CITY,
  cityInfo: fromJS(cityInfo)
});
export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
});
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(() => {
            console.log('error');
        })
    }
};