import { connect } from 'react-redux';
import { isNil, isEmpty } from 'ramda';
import AuthError from '../components/authError';

const mapStateToProps = ({ auth: { failure } }) => ({
  error: !isEmpty(failure)
});

export default connect(
  mapStateToProps
)(AuthError);
