import React from 'react';
// Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Redux
import { useSelector } from 'react-redux';
import Game from './Game';

const GameDetail = () => {
  // Data
  const { screen, game } = useSelector((state) => state.detail);
  return (

  );
};

export default GameDetail;