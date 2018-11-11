import { connect } from "react-redux";
import { pathOr } from 'ramda';
import {
  DROPLET_POWER_OFF,
  DROPLET_POWER_ON,
  DROPLET_REBOOT,
  powerOffDroplet, powerOnDroplet,
  rebootDroplet
} from '../actions/dropletActions';
import Settings from "../components/settings";

const mapStateToProps = ({ droplets: { droplet, action } }) => ({
  dropletId: droplet.id,
  rebooting: action === DROPLET_REBOOT,
  poweringOff: action === DROPLET_POWER_OFF,
  poweringOn: action === DROPLET_POWER_ON,
  name: pathOr('Droplet actions', ['name'], droplet)
});

const mapDispatchToProps = dispatch => ({
  reboot: dropletId => dispatch(rebootDroplet(dropletId)),
  powerOff: dropletId => dispatch(powerOffDroplet(dropletId)),
  powerOn: dropletId => dispatch(powerOnDroplet(dropletId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
