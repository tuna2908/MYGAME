import * as reducerType from '../../Assistance/reducerType';

const initState = false;

const reducer = (state = initState, action) => {
  switch (action.type) {
    case reducerType.KEY_ROTATE:
      return action.data;
    default:
      return state;
  }
};

export default reducer;
