import { connect } from 'react-redux';
import NavigationService from '../../core/routes/navigationService';
import Drawer from '../components/drawer';
import { logout } from '../../auth/utils';

const mapDispatchToProps = () => ({
  navigate: location => {
    NavigationService.toggleDrawer();
    NavigationService.navigate(location);
  },
  logout: async () => {
    await logout();
    NavigationService.toggleDrawer();
    NavigationService.navigate('Public');
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Drawer);
