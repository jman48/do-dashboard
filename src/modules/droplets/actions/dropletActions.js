import { DROPLET } from './index';


export const DROPLET_REBOOT = `${DROPLET}_REBOOT`;
export const DROPLET_REBOOT_SUCCESS = `${DROPLET_REBOOT}_SUCCESS`;

export const DROPLET_POWER_OFF = `${DROPLET}_POWER_OFF`;
export const DROPLET_POWER_OFF_SUCCESS = `${DROPLET}_POWER_OFF_SUCCESS`;

export const DROPLET_POWER_ON = `${DROPLET}_POWER_ON`;
export const DROPLET_POWER_ON_SUCCESS = `${DROPLET}_POWER_ON_SUCCESS`;

export const rebootDroplet = dropletId => ({
  type: DROPLET_REBOOT,
  payload: dropletId
});

export const powerOffDroplet = dropletId => ({
  type: DROPLET_POWER_OFF,
  payload: dropletId
});

export const powerOnDroplet = dropletId => ({
  type: DROPLET_POWER_ON,
  payload: dropletId
});
