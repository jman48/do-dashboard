import { connect } from 'react-redux';
import Auth from '../components';
import { saveToken } from '../actions';
import { checkAuth } from '../api';
import navigationService from '../../core/routes/navigationService';

const mapStateToProps = ({ auth: { loading } }) => ({
  loading,
  checkAuth,
  goToApp: () => navigationService.navigate('Private')
});

const mapDispatchToProps = dispatch => ({
  saveToken: token => dispatch(saveToken(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
