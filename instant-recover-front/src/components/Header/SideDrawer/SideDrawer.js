import React from "react";
import {
  StyledMenu,
  StyledLink,
  Icon,
  StyledList,
  StyledCloseIcon,
} from "./SideDrawer.style";
import { HeaderLink } from "../Header.style";
import Backdrop from "components/Backdrop";
import LogoArida from "assets/images/ARiDa-logo.png";
import { Link } from "react-router-dom";

const SideDrawer = ({ isOpen, close }) => {
  return (
    <>
      <Backdrop
        show={isOpen}
        className="make-click"
        data-label="pano de fundo para fechar gaveta"
        onClick={close}
      />
      <StyledMenu isOpen={isOpen}>
        <StyledCloseIcon
          className="make-click"
          data-label="icone para fechar gaveta"
          onClick={close}
          isopen={isOpen ? 1 : 0}
        />
        <StyledList onClick={close}>
          <li>
            <Link to="/">
              <Icon src={LogoArida} />
            </Link>
          </li>

          <StyledLink>
            <HeaderLink width="100%" to="/">
              Home
            </HeaderLink>
          </StyledLink>
          <StyledLink>
            <HeaderLink width="100%" to="/authors">
              Authors
            </HeaderLink>
          </StyledLink>
        </StyledList>
      </StyledMenu>
    </>
  );
};

export default SideDrawer;
