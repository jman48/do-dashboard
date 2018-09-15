const MODAL = 'modal';
export const MODAL_SHOW = `${MODAL}_show`;
export const MODAL_CLOSE = `${MODAL}_close`;

export const showModal = message=> ({
  type: MODAL_SHOW,
  payload: message
});
