import { connect } from 'react-redux';
import NavigationService from '../../core/routes/navigationService';
import Drawer from '../components/drawer';
import { logout } from '../../auth/actions';

const mapStateToProps = ({ auth: { email } }) => ({
  email
});

const mapDispatchToProps = dispatch => ({
  navigate: location => {
    NavigationService.toggleDrawer();
    NavigationService.navigate(location);
  },
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drawer);
