import React from 'react';

// styling and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Game = ({ name, released, image, rating }) => {
  return (
    <StyledGame>
      <h3>{name}</h3>
      <p>{released}</p>
      <p>Overall Rating: {rating === 0 ? 'N/A' : rating}</p>
      <img src={image} alt={name}></img>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  img {
    width: 100%;
  }
`;

export default Game;
