import { connect } from "react-redux";
import Counter from "../../components/counter/counter";
import {
  increaseCount,
  getUsers
} from "../../actions/counter/counterAction";

export const mapStateToProps = store => {
  return {
    ct: store.counter
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    increaseCount: () => {
      dispatch(increaseCount())
    },
    getUsers: () => {
      dispatch(getUsers())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);