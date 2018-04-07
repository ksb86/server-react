export const UPDATE_APP_DATA = 'UPDATE_APP_DATA';

const initialState = {
    counter: 5
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_APP_DATA: {
            return {
                ...state,
                ...action.payload
            };
        }
        default:
            return state;
    }
}
