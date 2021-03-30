import {GET_USER_DETAILS, SET_USER_DETAILS, UPDATE_USER_DETAILS, USER_DETAILS_ERROR,} from './AuthActions';

export const initialState = {
  userDetails: { },
  error: {
    code: 0,
    message: '',
  },
};


const AuthReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_USER_DETAILS:
      return {
        ...state.userDetails,
      };

    case SET_USER_DETAILS:
      return {
        ...state,
        userDetails: {...payload},
      };

    case UPDATE_USER_DETAILS:
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          ...payload,
        },
      };

    case USER_DETAILS_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...payload,
        },
      };

    default:
      return state;
  }
};

export default AuthReducer;
