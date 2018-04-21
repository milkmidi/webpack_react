import { connect } from 'react-redux';
import Navigation from '@/component/Navigation';
import { withRouter } from 'react-router';
import { toggleNavigation, hideNavigation } from '@/action';

const mapStateToProps = state => ({
  showNavigation: state.main.showNavigation,
});

const mapDispatchToProps = dispatch => ({
  onToggleNavigation() {
    dispatch(toggleNavigation());
  },
  onHideNavigation() {
    dispatch(hideNavigation());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));
