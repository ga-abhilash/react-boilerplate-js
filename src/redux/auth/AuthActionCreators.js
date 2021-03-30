import {GET_USER_DETAILS, SET_USER_DETAILS, UPDATE_USER_DETAILS, USER_DETAILS_ERROR,} from './AuthActions';
import {USER_ID} from "../../helpers/constants";
import history from "../../helpers/history";

import {GET, POST} from '../../services/rest.service';

export const getLoginUserDetails = () => {
  return (dispatch) => {
    dispatch({type: GET_USER_DETAILS});
  };
};

export const setLoginUserDetails = (data) => {
  return (dispatch) => {
    dispatch({type: SET_USER_DETAILS, payload: data});
  };
};

export const updateUserDetails = () => {
  return (dispatch) => {
    dispatch({type: UPDATE_USER_DETAILS});
  };
};

export const setError = () => {
  return (dispatch) => {
    dispatch({type: USER_DETAILS_ERROR});
  };
};


/* SERVER ASYNC ACTIONS */

/**
 * LOGIN USER
 */
export const login = (payload) => {
  return (dispatch) => {
    const url = '/auth/login';

    POST(url, payload)
        .then((res) => {
          // redirect user
          history.push('/admin/profile');
          // dispatch new user
          dispatch(setLoginUserDetails(res));
        }, (error) => {
          // show error
          dispatch(setError(error));
        });
  };
};


/**
 * GET PRIMARY DETAILS OF LOGGED IN USER
 * @returns {Function}
 */

export const fetchLoggedInUser = () => {
  return (dispatch) => {
    const userId = localStorage.get(USER_ID);
    const loginUserUrl = `/solution/user/me?userId=${userId}`;
    return GET(loginUserUrl)
        .then(({data}) => {
          dispatch(setLoginUserDetails(data));
        })
        .catch((err) => {
          dispatch(setError(err));
        });
  };
};

