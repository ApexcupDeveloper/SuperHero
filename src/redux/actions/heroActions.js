import * as types from '../types';
import http from '../../service/http-common';

export const searchHeroes = (name) => (dispatch) => {
    dispatch({ type: types.CLEAR_ERRORS });
    dispatch({ type: types.DATA_LOADING })

    http
        .get(`/search/${name}`)
        .then((res) => {
            if (res.data.response === 'success') {
                dispatch({
                    type: types.SEARCH_HEROES,
                    payload: res.data.results
                })
            } else {
                dispatch({
                    type: types.GET_ERRORS,
                    payload: res.data.error
                });
            }

        })
        .catch((err) => {
            dispatch({
                type: types.GET_ERRORS,
                payload: err.message
            });
        });
};