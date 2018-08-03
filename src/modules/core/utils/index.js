import { Alert } from "react-native";
import { Sentry } from 'react-native-sentry';

export function handleError(error) {
  Sentry.captureException(error);
}

export function showError(title, message) {
  Alert.alert(title, message, [{ text: "Ok" }], { cancelable: true });
}
