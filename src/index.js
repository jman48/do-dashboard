import React from "react";
import { Provider } from "react-redux";
import firebase from "react-native-firebase";
import { Root } from "native-base";
import { PersistGate } from "redux-persist/integration/react";
import initStore from "./store";
import Main from "./modules/core/routes/index";
import NavigationService from "./modules/core/routes/navigationService";
import Loading from "./modules/core/components/loading";
import Modal from "./modules/modal/containers";
import BannerAd from './modules/core/components/BannerAd';
import './modules/core/utils/ad.js';

const { store, persistor } = initStore();

export default class App extends React.Component {
  constructor() {
    super();
    const perf = firebase.perf();
    perf.setPerformanceCollectionEnabled(true);

  }

  render() {
    return (
      <Root>
        <Provider store={store}>
          <PersistGate loading={<Loading state />} persistor={persistor}>
            <Main
              ref={navigationRef => {
                NavigationService.setTopLevelNavigator(navigationRef);
              }}
            />
            <Modal />
            <BannerAd />
          </PersistGate>
        </Provider>
      </Root>
    );
  }
}
