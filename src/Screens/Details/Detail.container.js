import {connect} from 'react-redux';
import DetailScreen from './Detail.screen.component';
import {decreaseCount, increaseCount} from './Detail.actions';

const mapStateToProps = (state) => ({
    count: state.detail_store.count || 0,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    increaseCount: () => dispatch(increaseCount()),
    decreaseCount: () => dispatch(decreaseCount()),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
  