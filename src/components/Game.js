import React from 'react';

// styling and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Redux
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';

const Game = ({ name, released, image, rating, id }) => {
  // Load details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
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
  text-align: center;
  border-radius: 3%;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
