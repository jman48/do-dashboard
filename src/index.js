import React from 'react';
import { Provider } from 'react-redux';
import firebase from 'react-native-firebase';
import store from './store';
import Root from './modules/core/routes/index';
import NavigationService from './modules/core/routes/navigationService';

export default class App extends React.Component {
  constructor() {
    super();
    const perf = firebase.perf();
    perf.setPerformanceCollectionEnabled(true);
  }

  render() {
    return (
      <Provider store={store}>
        <Root
          ref={navigationRef => {
            NavigationService.setTopLevelNavigator(navigationRef);
          }}
        />
      </Provider>
    );
  }
}
