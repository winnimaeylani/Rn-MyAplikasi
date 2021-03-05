import {connect} from 'react-redux';
import HomeScreen from './Home.screen.component';
import {decreaseCount, increaseCount} from './Home.actions';

const mapStateToProps = (state) => ({
  count: state.home_store.count || 0,
});

const mapDispatchToProps = (dispatch) => ({
  increaseCount: () => dispatch(increaseCount()),
  decreaseCount: () => dispatch(decreaseCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
