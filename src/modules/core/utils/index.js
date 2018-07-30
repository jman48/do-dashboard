import firebase from 'react-native-firebase';

const crashlytics = firebase.crashlytics();

export function handleError(error) {
  crashlytics.recordError(1, error.message);
}
