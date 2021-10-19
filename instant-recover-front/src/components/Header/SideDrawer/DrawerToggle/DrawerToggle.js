import React from "react";
import { StyledBurger } from "./DrawerToggle.style";

const DrawerToggle = ({ onCLick }) => (
  <StyledBurger
    className='make-click'
    data-label='abrir menu icone'
    onClick={onCLick}
  >
    <div />
    <div />
    <div />
  </StyledBurger>
);

export default DrawerToggle;
