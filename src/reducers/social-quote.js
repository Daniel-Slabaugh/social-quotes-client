import {
    FETCH_SOCIAL_QUOTE_STARTED,
    FETCH_SOCIAL_QUOTE_SUCCESS,
    FETCH_SOCIAL_QUOTE_ERROR, 
    GENERAL_LOADING_STARTED
} from '../actions/social-quote';

const initialState = {
    quotes: [], 
    currentQuote: {
        text: null, 
        reference: null, 
        tags: [], 
        user: null
    },
    loading: false,
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_SOCIAL_QUOTE_STARTED) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === FETCH_SOCIAL_QUOTE_SUCCESS) {
        return Object.assign({}, state, {
            quotes: action.quotes, 
            loading: false, 
            error: null
        });
    } else if (action.type === FETCH_SOCIAL_QUOTE_ERROR) {
        return Object.assign({}, state, {
            loading: false, 
            error: action.error
        });
    }
    return state;
}

