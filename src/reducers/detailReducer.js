const initialState = {
  game: {},
  screen: {},
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DETAIL':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default detailReducer;
