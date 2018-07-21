import { connect } from "react-redux";
import AuthSwitch from "../components/authSwitch";
import { isAuthed } from "../utils";

const mapStateToProps = ({ auth: { token } }) => ({
  isAuthenticated: isAuthed(token)
});

const mapDispatchToProps = (dispatch, props) => ({
  navigate: props.navigation.navigate
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthSwitch);
