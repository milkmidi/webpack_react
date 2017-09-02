import User from '@/component/User';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  name: state.basic.name,
});

const mapDispatchToProps = dispatch => ({
  // actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);
