import { connect } from 'react-redux';
import { isEmpty } from 'ramda';
import Droplets from '../components';
import { DROPLETS_REFRESH, loadDroplets } from '../actions';

const mapStateToProps = ({ droplets: { droplets, dropletsLoading, dropletsLoadFail, refreshing } }) => ({
  loading: dropletsLoading,
  droplets,
  error: !isEmpty(dropletsLoadFail),
  refreshing
});

const mapDispatchToProps = dispatch => ({
  load: () => dispatch(loadDroplets()),
  refresh: () => dispatch({ type: DROPLETS_REFRESH })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Droplets);
