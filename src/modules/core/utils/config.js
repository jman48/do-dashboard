import firebase from 'react-native-firebase';

const config = firebase.config();
config.setDefaults({
  ads: 'true'
});

export default function isEnabled(feature) {
  return config.getValue(feature) === 'true';
}
