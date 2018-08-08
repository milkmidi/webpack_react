import { connect } from 'react-redux';

import Loading from '@/component/Loading';

const mapStateToProps = state => ({
  loading: state.main.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
