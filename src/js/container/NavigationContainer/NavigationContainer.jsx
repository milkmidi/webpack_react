import { connect } from 'react-redux';
import Navigation from '@/component/Navigation';

import { toggleNavigation } from '../../action';

const mapStateToProps = state => ({
  showNavigation: state.main.showNavigation,
});

const mapDispatchToProps = dispatch => ({
  onToggleNavigation() {
    dispatch(toggleNavigation());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
