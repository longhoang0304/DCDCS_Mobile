import { connect } from 'react-redux';
import Welcome from '../screens/Welcome';
import { SysActions } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  ...state,
  ...ownProps,
});

const mapDispatchToProps = {
  connect: SysActions.connectToServer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);