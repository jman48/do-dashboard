import React from 'react';
import firebase from 'react-native-firebase';

const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();

const BannerAd = () => (
  <Banner
    unitId="ca-app-pub-1196600699219140/2972943317"
    size="SMART_BANNER"
    request={request.build()}
    onAdFailedToLoad={error => console.error(error)}
  />
);

export default BannerAd;
