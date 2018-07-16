import firebase from 'react-native-firebase';

const analytics = firebase.analytics();

analytics.setAnalyticsCollectionEnabled(true);

export default analytics;
