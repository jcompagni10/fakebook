import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';
import ScrollToTop from "./../util/scroll_util";

export default ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </HashRouter>
  </Provider>
);