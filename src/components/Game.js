import React from 'react';

// styling and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Game = ({ name, released, image }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{released}</p>
    </div>
  );
};

export default Game;
