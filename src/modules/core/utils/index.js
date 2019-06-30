import { Alert } from "react-native";

export function handleError(error) {
  console.error(error);
}

export function showError(title, message) {
  Alert.alert(title, message, [{ text: "Ok" }], { cancelable: true });
}
