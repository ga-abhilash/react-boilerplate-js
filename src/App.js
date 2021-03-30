import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";

import LandingPage from "./containers/landing-page/LandingPage";

class App extends Component {
  render() {
    return(
        <>
          <Switch>
            <Route path={'/'} component={LandingPage} exact/>
          </Switch>
        </>
    )
  }
}

export default App;
