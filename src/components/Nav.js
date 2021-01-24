import React from 'react';
// Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.svg';

const Nav = () => {
  return (
    <StyledNav>
      <Logo></Logo>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)``;
const Logo = styled(motion.div)``;

export default Nav;
