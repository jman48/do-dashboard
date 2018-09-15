import React from 'react';
import { View } from 'native-base';
import Setting from '../components/setting';

const Settings = ({ dropletId, reboot, powerOn, powerOff }) => (
  <View>
    <Setting name="Reboot" onActivate={() => reboot(dropletId)}/>
    <Setting name="Power On" onActivate={() => powerOn()}/>
    <Setting name="Power Off" onActivate={() => powerOff()}/>
  </View>
);

export default Settings;
