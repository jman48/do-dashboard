import { pathOr } from "ramda";
import { ActionSheet } from "native-base";

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

export function showActionSheet() {
  const DROPLET_ACTIONS = [
    "Power Off",
    "Power On",
    "Reboot",
    "Snapshot",
    "Cancel"
  ];

  ActionSheet.show(
    {
      options: DROPLET_ACTIONS,
      cancelButtonIndex: 4,
      destructiveButtonIndex: 0,
      title: "Manage Droplet"
    },
    buttonIndex => console.log("Button clicked at: ", buttonIndex)
  );
}

export function getDropletActions() {

}
