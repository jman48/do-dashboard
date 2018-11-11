export const DROPLETS = 'DROPLETS';
export const DROPLETS_LOAD_ALL = `${DROPLETS}_LOAD_ALL`;
export const DROPLETS_LOAD_ALL_SUCCESS = `${DROPLETS_LOAD_ALL}_SUCCESS`;
export const DROPLETS_LOAD_ALL_FAIL = `${DROPLETS_LOAD_ALL}_FAIL`;

export const DROPLETS_REFRESH = `${DROPLETS}_REFRESH`;
export const DROPLETS_REFRESH_SUCCESS = `${DROPLETS_REFRESH}_SUCCESS`;
export const DROPLETS_REFRESH_FAIL = `${DROPLETS_REFRESH}_FAIL`;

export const DROPLET = 'DROPLET';
export const DROPLET_LOAD = `${DROPLET}_LOAD`;
export const DROPLET_LOAD_SUCCESS = `${DROPLET_LOAD}_SUCCESS`;
export const DROPLET_LOAD_FAIL = `${DROPLET_LOAD}_FAIL`;


export const loadDroplets = () => ({
  type: DROPLETS_LOAD_ALL
});

export const loadedDroplets = droplets => ({
  type: DROPLETS_LOAD_ALL_SUCCESS,
  payload: droplets
});

export const loadedDroplet = droplet => ({
  type: DROPLET_LOAD_SUCCESS,
  payload: droplet
});

export const loadDroplet = dropletID => ({
  type: DROPLET_LOAD,
  payload: dropletID
});

export const loadDropletsFail = message => ({
  type: DROPLETS_LOAD_ALL_FAIL,
  payload: message
});

export const loadDropletFail = message => ({
  type: DROPLET_LOAD_FAIL,
  payload: message
});
