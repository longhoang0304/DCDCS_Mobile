import { connect } from 'react-redux';
import UserInfo from '../screens/UserInfo';
import { UserActions } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  ...state.user,
  ...ownProps,
});

const mapDispatchToProps = {
  getUserInfo: UserActions.getInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);