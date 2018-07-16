import { connect } from 'react-redux';
import DropletSummary from '../components/dropletSummary';
import { loadDroplet } from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  loadDroplet: dropletId => dispatch(loadDroplet(dropletId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropletSummary);
