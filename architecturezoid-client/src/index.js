import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {I18nextProvider} from "react-i18next";
import {ThemeProvider} from "@material-ui/styles";
import {BrowserRouter as Router} from "react-router-dom";
import ErrorBoundary from "./components/common/error-boundary";

import store from "./store";
import theme from "./theme";
import history from "./history";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <ErrorBoundary>
        <ThemeProvider theme={ theme }>
          <I18nextProvider i18n={ i18n }>
            <Router history={history}>
              <App />
            </Router>
          </I18nextProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
