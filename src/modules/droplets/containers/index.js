import { connect } from 'react-redux';
import Droplets from '../components';
import { loadDroplets } from '../actions';

const mapStateToProps = ({ droplets: { droplets, dropletsLoading } }) => ({
  loading: dropletsLoading,
  droplets
});

const mapDispatchToProps = dispatch => ({
  load: () => dispatch(loadDroplets())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Droplets);
