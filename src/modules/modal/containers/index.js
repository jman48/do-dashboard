import { connect } from 'react-redux';
import { isNil, isEmpty } from 'ramda';
import errorModal from '../components/index.js';

const mapStateToProps = ({ modal: { open, message } }) => ({
  open,
  message
});

export default connect(
  mapStateToProps
)(errorModal);
