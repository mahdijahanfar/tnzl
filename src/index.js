import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import Layout from './containers/Layout';
import theme from './theme'
import { store } from './context/redux/store';
import { Provider } from 'react-redux';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

render(
  <Provider store={store} >
    <ThemeProvider theme={theme} >
      <Layout />
    </ThemeProvider>
  </Provider>
  , document.getElementById('root')
);