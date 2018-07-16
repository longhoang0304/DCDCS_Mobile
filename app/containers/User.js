import { connect } from 'react-redux';
import UserInfo from '../screens/UserInfo';
import { UserActions, AuthActions } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state.auth,
  info: state.user.info,
});

const mapDispatchToProps = {
  getUserInfo: UserActions.getInfo,
  logout: AuthActions.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);