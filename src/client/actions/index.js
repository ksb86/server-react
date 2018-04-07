import {
    UPDATE_APP_DATA
} from '../reducers';

export const updateAppData = (payload) => {
    return {
        type: UPDATE_APP_DATA,
        payload
    };
};
