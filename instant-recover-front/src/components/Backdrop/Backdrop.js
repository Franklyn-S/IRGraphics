import React from "react";
import { StyledBackdrop } from "./Backdrop.style";

const Backdrop = ({ show, onClick }) =>
  show && (
    <StyledBackdrop
      className='make-click'
      data-label='backdrop'
      onClick={onClick}
    />
  );

export default Backdrop;
