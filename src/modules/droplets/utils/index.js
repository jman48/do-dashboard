import { pathOr } from 'ramda';

export function getDropletInfo(droplet) {
  return {
    name: pathOr(null, ['name'], droplet),
    memory: pathOr(null, ['memory'], droplet),
    vcpus: pathOr(null, ['vcpus'], droplet),
    disk: pathOr(null, ['disk'], droplet),
    status: pathOr(null, ['status'], droplet),
    region: pathOr(null, ['region'], droplet),
    tags: pathOr([], ['tags'], droplet),
    image: {
      distribution: pathOr(null, ['image', 'distribution'], droplet),
    }
  };
}
