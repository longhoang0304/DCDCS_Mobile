import { connect } from 'react-redux';
import Home from '../screens/Home';
import { SysActions, UserActions } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  ...state.info,
  ...state.user,
  ...state.products,
  isLoadingUser: state.user.isLoading,
  isLoadingProduct: state.products.isLoading,
  ...ownProps,
});

const mapDispatchToProps = {
  getData: SysActions.getData,
  getUserInfo: UserActions.getInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);