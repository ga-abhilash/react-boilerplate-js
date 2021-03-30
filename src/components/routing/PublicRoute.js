import React from "react";
import {Redirect, Route} from "react-router-dom";
import Cookie from "js-cookie";

import {AUTH_KEY_NAME} from "../../helpers/constants";

const PublicRoute = ({component: Component, ...rest}) => {
  const isAuthorized = Cookie.get(AUTH_KEY_NAME);

  return (
      <Route {...rest} render={props => (
          isAuthorized
              ? <Redirect to={{pathname: '/profile', state: {from: props.location}}}/>
              : <Component {...props} />
      )}/>
  )
};

export default PublicRoute;
