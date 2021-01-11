const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return { ...state };
  }
};

// Action - an object that describes what's going to happen
// { type: "FETCH_GAMES";}
// dispatch({type: "FETCH_GAMES"})

//popular: action.payload.popular,
// newGames: action.payload.newGames,
// upcoming: action.payload.upcoming,

export default gamesReducer;
