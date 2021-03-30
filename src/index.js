import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {Provider} from "react-redux";

// React-Redux store
import store from "./redux/store";

// ROUTING HISTORY
import history from './helpers/history';
import ScrollToTop from "./hoc/ScrollToTop";

// ASSET AND STYLES
import './vendor';

// MAIN APP
import App from './App';

import reportWebVitals from './reportWebVitals';

const Root = (
    <React.StrictMode>
      <Provider store={store}>
        <Router history={history}>
          <ScrollToTop>
            <App/>
          </ScrollToTop>
        </Router>
      </Provider>
    </React.StrictMode>
);

ReactDOM.render(
    Root,
    document.getElementById('root')
);

reportWebVitals();
