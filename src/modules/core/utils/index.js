import firebase from "react-native-firebase";
import { Alert } from "react-native";

const crashlytics = firebase.crashlytics();

export function handleError(error) {
  crashlytics.recordError(1, error.message);
}

export function showError(title, message) {
  Alert.alert(title, message, [{ text: "Ok" }], { cancelable: true });
}
