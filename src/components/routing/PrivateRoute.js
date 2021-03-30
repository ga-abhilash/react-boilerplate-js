import React from "react";
import {Redirect, Route} from "react-router-dom";
import Cookie from "js-cookie";

import {AUTH_KEY_NAME} from "../../helpers/constants";


const PrivateRoute = ({component: Component, ...rest}) => {
  const isAuthorized = Cookie.get(AUTH_KEY_NAME);

  return (
      <Route {...rest} render={props => (
          isAuthorized
              ? <Component {...props} />
              : <Redirect to={{pathname: '/', state: {from: props.location}}}/>
      )}/>
  )
};

export default PrivateRoute;
