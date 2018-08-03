import { connect } from 'react-redux';
import { isEmpty } from 'ramda';
import Droplets from '../components';
import { loadDroplets } from '../actions';

const mapStateToProps = ({ droplets: { droplets, dropletsLoading, dropletsLoadFail } }) => ({
  loading: dropletsLoading,
  droplets,
  error: !isEmpty(dropletsLoadFail),
  showDroplets: !dropletsLoading && !isEmpty(dropletsLoadFail)
});

const mapDispatchToProps = dispatch => ({
  load: () => dispatch(loadDroplets())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Droplets);
