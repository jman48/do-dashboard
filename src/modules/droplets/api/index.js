import API from '../../core/api';
import { DROPLETS_PER_PAGE } from '../config';

const DROPLET_URL_BASE = '/v2/droplets';

export async function getDroplets() {
  return API.get(
    `${DROPLET_URL_BASE}?page=1&per_page=${DROPLETS_PER_PAGE}`
  ).then(response => response.data.droplets);
}

export async function getDroplet(dropletID) {
  return API.get(`${DROPLET_URL_BASE}/${dropletID}`).then(
    response => response.data.droplet
  );
}

function makeActionRequest(dropletId, type) {
  return API({
    method: 'post',
    url: `${DROPLET_URL_BASE}/${dropletId}/actions`,
    data: {
      type
    },
    headers: {
      "Content-Type": "application/json"
    }
  });
}

export function reboot(dropletId) {
  return makeActionRequest(dropletId, 'reboot');
}



// Restart
// Resize
// Backups - Enable/ Disable
// Power Off/ On
