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
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
  }
`;

export default Game;
