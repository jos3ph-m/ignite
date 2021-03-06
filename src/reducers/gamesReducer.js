const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return {
        ...state,
        ...action.payload,
      };
    case 'FETCH_SEARCHED':
      return {
        ...state,
        searched: action.payload.searched,
      };
    case 'CLEAR_SEARCHED':
      return {
        ...state,
        searched: [],
      };
    default:
      return { ...state };
  }
};

//popular: action.payload.popular,
//newGames: action.payload.newGames,
//upcoming: action.payload.upcoming,

// Action - an object that describes what's going to happen
// { type: "FETCH_GAMES";}
// dispatch({type: "FETCH_GAMES"})

export default gamesReducer;
