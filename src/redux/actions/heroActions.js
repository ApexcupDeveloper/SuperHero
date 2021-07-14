import * as types from '../types';
import http from '../../service/http-common';

export const searchHeroes = (name) => (dispatch) => {
    dispatch({ type: types.CLEAR_ERRORS });
    dispatch({ type: types.DATA_LOADING })

    http
        .get(`/search/${name}`)
        .then((res) => {
            console.log('data : ', res.data)
            // dispatch({
            //     type: types.SEARCH_HEROES,
            //     payload: res.data
            // })
        })
        .catch((err) => {
            console.log('error : ', err)
            // dispatch({
            //     type: types.GET_ERRORS,
            //     payload: err
            // });
        });
};