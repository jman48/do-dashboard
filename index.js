import { AppRegistry } from "react-native";
import { Sentry } from "react-native-sentry";
import App from "./src";

Sentry.config(
  "https://9107f64d9ced424ea97d01eb10b8004b@sentry.io/1255802"
).install();

AppRegistry.registerComponent("DigitalOceanDashboard", () => App);
