import { type } from './types';
import history from '../history';
import streams from '../apis/streams';

export const signIn = (userId) => {
    return {
        type: type.SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: type.SIGN_OUT
    }
};

export const errorActionCreator = (errorType, error) => {
    return {
        type: errorType,
        error: true,
        payload: error
    }
}

export const createStream = (formValues) => async (dispatch, getState) => {

    const { userId } = getState().auth;

    const response = await streams.post('/streams', { ...formValues, userId });

    dispatch({ type: type.CREATE_STREAM, payload: response.data })

    history.push('/');

};

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');

    dispatch({ type: type.FETCH_STREAMS, payload: response.data })
}

export const fetchStream = id => async dispatch => {
    await streams.get(`/streams/${id}`).then( data =>  dispatch({ type: type.FETCH_STREAM, payload: data }))
    .catch(error => {
        dispatch(errorActionCreator(type.FETCH_STREAM_ERROR, error))
    })


}

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues);

    dispatch({ type: type.EDIT_STREAM, payload: response.data });

    history.push("/");

}

export const deleteStream = id => async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({ type: type.DELETE_STREAM, payload: id })

    history.push('/');
}