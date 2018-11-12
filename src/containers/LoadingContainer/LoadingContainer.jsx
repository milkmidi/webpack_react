import { connect } from 'react-redux';

import Loading from '@/components/Loading';

const mapStateToProps = state => ({
  loading: state.main.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
