import React from "react";
import { View } from "native-base";
import Setting from "../components/setting";

const Settings = ({
  dropletId,
  reboot,
  powerOn,
  powerOff,
  rebooting,
  poweringOff,
  poweringOn
}) => (
  <View>
    <Setting
      name="Reboot"
      disabled={rebooting}
      onActivate={() => reboot(dropletId)}
    />
    <Setting
      name="Power On"
      disable={poweringOff}
      onActivate={() => powerOn(dropletId)}
    />
    <Setting
      name="Power Off"
      disabled={poweringOn}
      onActivate={() => powerOff(dropletId)}
    />
  </View>
);

export default Settings;
