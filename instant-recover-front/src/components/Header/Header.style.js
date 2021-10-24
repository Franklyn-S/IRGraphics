import styled from "styled-components/macro";

export const Header = styled.header(() => ({
  display: "flex",
  width: "100%",
  backgroundColor: "#343741",
  padding: "1px 0",
  "@media(min-width: 768px)": {
    padding: "unset",
  },
}));

export const Items = styled.ul`
  display: none;
  list-style-type: none;
  padding: 0;
  margin: 0;
  align-items: center;
  font-size: 1.5rem;
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const Item = styled.li`
  padding: 10px 20px;
  cursor: pointer;
`;

export const HeaderLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: block;
  width: 100%;
  height: 100%;
  padding: 20px 0px;
`;

export const DesktopImg = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const MobileImg = styled.img`
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`;
