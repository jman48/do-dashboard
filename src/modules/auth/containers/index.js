import { connect } from 'react-redux';
import Auth from '../components';
import navigationService from '../../core/routes/navigationService';

const mapStateToProps = ({ auth: { token, loading } }) => ({
  loading
});

const mapDispatchToProps = (dispatch, props) => ({
  goToApp: () => navigationService.navigate('Private')
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
