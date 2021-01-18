const initialState = {
  game: { platforms: [] },
  screen: { results: [] },
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
