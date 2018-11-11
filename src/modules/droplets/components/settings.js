import React from "react";
import { Content } from "native-base";
import Setting from "../components/setting";
import Title from "../../core/components/title";

const Settings = ({
  name,
  dropletId,
  reboot,
  powerOn,
  powerOff,
  rebooting,
  poweringOff,
  poweringOn
}) => (
  <Content style={{ backgroundColor: "white" }}>
    <Title>{name}</Title>
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
  </Content>
);

export default Settings;
