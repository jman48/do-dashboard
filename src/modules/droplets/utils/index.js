import { pathOr } from "ramda";
import { Alert } from "react-native";

export const CANCELLED = 'CANCELLED';

export function getDropletInfo(droplet) {
  return {
    name: pathOr(null, ["name"], droplet),
    memory: pathOr(null, ["memory"], droplet),
    vcpus: pathOr(null, ["vcpus"], droplet),
    disk: pathOr(null, ["disk"], droplet),
    status: pathOr(null, ["status"], droplet),
    region: pathOr(null, ["region"], droplet),
    tags: pathOr([], ["tags"], droplet),
    image: {
      distribution: pathOr(null, ["image", "distribution"], droplet)
    }
  };
}

export function confirm(action, message) {
  return new Promise((resolve, reject) => {
    Alert.alert(`Confirm ${action}`, message, [
      { text: "Ok", onPress: resolve },
      { text: "Cancel", onPress: () => reject(CANCELLED) }
    ]);
  });
}
