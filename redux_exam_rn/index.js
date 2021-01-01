import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import configureStore from './src/redux/reducers/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);