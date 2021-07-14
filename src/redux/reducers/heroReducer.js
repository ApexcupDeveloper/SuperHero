import * as types from '../types';
import { initialState } from '../initialState';

export default function (state = initialState.heroes, action) {
    switch (action.type) {
        case types.DATA_LOADING:
            return { ...state, loading: true };
        case types.SEARCH_HEROES:
            return {
                heroesData: action.payload,
                loading: false
            };
        case types.GET_HERO_BY_ID:
            return {
                ...state,
                tempHeroData: action.payload,
                loading: false
            };
        case types.SELECT_HERO:
            return {
                ...state,
                selectedHeroesData: action.payload,
                loading: false
            };
        case types.GET_ERRORS:
            return {
                ...state,
                errors: action.payload,
                loading: false
            };
        case types.CLEAR_ERRORS:
            return {
                ...state,
                errors: [],
            };
        default:
            return state;
    }
}
