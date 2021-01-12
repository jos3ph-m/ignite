import React from 'react';

// styling and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Game = ({ name, released, image, rating }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{released}</p>
      <p>Overall Rating: {rating === 0 ? 'N/A' : rating}</p>
    </div>
  );
};

export default Game;
