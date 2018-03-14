import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_SOCIAL_QUOTE_SUCCESS = 'FETCH_SOCIAL_QUOTE_SUCCESS';
export const fetchSocialQuoteSuccess = quotes => ({
    type: FETCH_SOCIAL_QUOTE_SUCCESS,
    quotes
});

export const FETCH_SOCIAL_QUOTE_ERROR = 'FETCH_SOCIAL_QUOTE_ERROR';
export const fetchSocialQuoteError = error => ({
    type: FETCH_SOCIAL_QUOTE_ERROR,
    error
});

export const FETCH_SOCIAL_QUOTE_STARTED = 'FETCH_SOCIAL_QUOTE_STARTED';
export const fetchSocialQuoteStarted = () => ({
    type: FETCH_SOCIAL_QUOTE_STARTED
});

export const GENERAL_LOADING_STARTED = 'GENERAL_LOADING_STARTED';
export const generalLoadingStarted = () => ({
    type: GENERAL_LOADING_STARTED
});


export const fetchSocialQuotes = () => (dispatch, getState) => {
    dispatch(fetchSocialQuoteStarted());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/social-quotes`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({quotes}) => dispatch(fetchSocialQuoteSuccess(quotes)))
    .catch(err => {
        dispatch(fetchSocialQuoteError(err));
    });
};

export const fetchQuote = () => (dispatch, getState) => {
    dispatch()
}
