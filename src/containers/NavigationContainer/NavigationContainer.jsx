import { connect } from 'react-redux';
import Navigation from '@/components/Navigation';
import { withRouter } from 'react-router';
import { toggleNavigation, hideNavigation } from '@/actions';

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
