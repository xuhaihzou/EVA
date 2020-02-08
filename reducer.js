import * as ActionTypes from './actionTypes';

const defaultState={
    loading:false,
    tableData:{}
};
export default (state=defaultState,action)=>{
    switch (action.type) {
        case ActionTypes.START_LOAD:
            return {
                ...state,
                loading:true
            };
        case ActionTypes.FINISH_LOAD:
            return {
                ...state,
                loading:false,
                tableData:action.payload
            };
        default:
            return state;
    }
}