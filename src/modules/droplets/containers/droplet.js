import { connect } from 'react-redux';
import { isEmpty } from 'ramda';
import Droplet from '../components/droplet';

const mapStateToProps = ({ droplets: { droplet, dropletLoading, dropletLoadFail } }) => ({
  loading: dropletLoading,
  droplet,
  error: !isEmpty(dropletLoadFail),
  showDroplet: isEmpty(dropletLoadFail) && !dropletLoading
});

export default connect(mapStateToProps)(Droplet);
