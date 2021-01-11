const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return { ...state };
    default:
      return { ...state };
  }
};

// Action - an object that describes what's going to happen
// { type: "FETCH_GAMES";}
// dispatch({type: "FETCH_GAMES"})

export default gamesReducer;
