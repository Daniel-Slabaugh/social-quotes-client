import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const SOCIAL_QUOTE_SUCCESS = 'SOCIAL_QUOTE_SUCCESS';
export const socialQuoteSuccess = quotes => ({
    type: SOCIAL_QUOTE_SUCCESS,
    quotes
});

export const SOCIAL_QUOTE_ERROR = 'SOCIAL_QUOTE_ERROR';
export const socialQuoteError = error => ({
    type: SOCIAL_QUOTE_ERROR,
    error
});

export const SOCIAL_QUOTE_STARTED = 'SOCIAL_QUOTE_STARTED';
export const socialQuoteStarted = () => ({
    type: SOCIAL_QUOTE_STARTED
});

export const fetchSocialQuotes = () => (dispatch, getState) => {
    dispatch(socialQuoteStarted());
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
    .then(({quotes}) => dispatch(socialQuoteSuccess(quotes)))
    .catch(err => {
        dispatch(socialQuoteError(err));
    });
};