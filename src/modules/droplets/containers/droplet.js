import { connect } from 'react-redux';
import Droplet from '../components/droplet';

const mapStateToProps = ({ droplets: { droplet, dropletLoading } }) => ({
  loading: dropletLoading,
  droplet
});

export default connect(mapStateToProps)(Droplet);
