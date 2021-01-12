import React, { useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
// Components
import Game from '../components/Game';
// styling and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Home = () => {
  // Fetch Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // Get that data back
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
