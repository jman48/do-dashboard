import { connect } from 'react-redux';
import { rebootDroplet } from '../actions';
import Settings from '../components/settings';

const mapStateToProps = ({ droplets: { droplet }}) => ({
  dropletId: droplet.id
});

const mapDispatchToProps = dispatch => ({
  reboot: dropletId => dispatch(rebootDroplet(dropletId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
