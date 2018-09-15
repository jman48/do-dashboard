import { connect } from 'react-redux';
import Settings from '../components/settings';



const mapDispatchToProps = dispatch => ({
  load: () => dispatch(loadDroplets()),
});

export default connect(
  null,
  null
)(Settings);
