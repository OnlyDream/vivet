import _ from 'lodash';
import { type } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case type.FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        case type.FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case type.CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case type.EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case type.DELETE_STREAM:
            return _.omit(state, action.payload)
        case type.FETCH_STREAM_ERROR:
            return {
                ...state,
                error: {
                    errorMessage: "Something wrong",
                    ...action.payload,
                },
            }
        default:
            return state;
    }

}