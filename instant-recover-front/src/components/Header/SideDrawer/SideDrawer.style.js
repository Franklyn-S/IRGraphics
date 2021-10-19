import styled from "styled-components";
import { ReactComponent as CloseIcon } from "assets/svgs/close-icon.svg";

export const StyledMenu = styled.nav(({ isOpen }) => ({
  position: "fixed",
  width: "328px",
  maxWidth: "85%",
  height: "100%",
  left: 0,
  top: 0,
  zIndex: isOpen ? 200 : -1,
  backgroundColor: "#FFF",
  padding: "25px 16px",
  transition: "transform 0.3s ease-out, z-index 0.2s ease-out",
  transform: isOpen ? "translateX(0)" : "translateX(-100%)",
  listStyleType: "none",
  margin: 0,
}));

export const StyledList = styled.ul(() => ({
  margin: 0,
  padding: 0,
  listStyleType: "none",
  display: "flex",
  flexFlow: "column",
  alignItems: "start",
}));

export const StyledLink = styled.li(() => ({
  color: "#002364",
  borderBottom: "1px solid #E3E0E2",
  width: "100%",
}));

export const StyledCloseIcon = styled(CloseIcon)(({ isopen }) => ({
  position: "absolute",
  right: "-40px",
  top: "10px",
  display: isopen ? "block" : "none",
}));

export const Icon = styled.img`
  padding: 10px 0;
  cursor: pointer;
  height: 63px;
  display: block;
  position: inherit;
`;
