import styled from "styled-components";

export const StyledBurger = styled.div(() => ({
  width: "40px",
  height: "100%",
  display: "flex",
  flexFlow: "column",
  justifyContent: "space-around",
  alignItems: "center",
  margin: "20px 0",
  boxSizing: "border-box",
  cursor: "pointer",
  marginLeft: "20px",
  div: {
    width: "90%",
    height: "3px",
    margin: "2px",
    padding: "2px",
    backgroundColor: "#fff",
    borderRadius: "20px",
  },

  "@media (min-width: 768px)": {
    display: "none",
  },
}));
