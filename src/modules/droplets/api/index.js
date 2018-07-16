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
