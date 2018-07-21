import { connect } from 'react-redux';
import * as Actions from '../actions';
import Auth from '../components';

const mapStateToProps = ({ auth: { token, loading } }) => ({
  loading
});

const mapDispatchToProps = (dispatch, props) => ({
  authenticate: token => dispatch(Actions.authenticate(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
