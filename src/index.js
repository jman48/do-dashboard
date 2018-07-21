import React from "react";
import { Provider } from "react-redux";
import firebase from "react-native-firebase";
import { PersistGate } from 'redux-persist/integration/react';
import initStore from './store';
import Root from "./modules/core/routes/index";
import NavigationService from "./modules/core/routes/navigationService";
import Loading from './modules/core/components/loading';

const { store, persistor } = initStore();

export default class App extends React.Component {
  constructor() {
    super();
    const perf = firebase.perf();
    perf.setPerformanceCollectionEnabled(true);
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading state />} persistor={persistor}>
          <Root
            ref={navigationRef => {
              NavigationService.setTopLevelNavigator(navigationRef);
            }}
          />
        </PersistGate>
      </Provider>
    );
  }
}
