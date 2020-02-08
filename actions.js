import * as ActionTypes from './actionTypes';

export const startLoad=()=>({
    type:ActionTypes.START_LOAD,
});

export const finishLoad=data=>({
    type:ActionTypes.FINISH_LOAD,
    payload:data,
});