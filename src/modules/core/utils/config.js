import firebase from 'react-native-firebase';

const config = firebase.config();
config.setDefaults({
  ads: 'true',
  admob: 'ca-app-pub-1196600699219140~5870569392'
});

export function getValue(key) {
  return config.getValue(key);
}
