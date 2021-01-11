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

// Action Creator
const fetchGames = (userData) => {
  return {
    type: 'FETCH_GAMES',
    payload: userData,
  };
};

fetchGames({ user: 'name' });

export default gamesReducer;
