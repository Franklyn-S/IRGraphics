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

const SideDrawer = ({ isOpen, close }) => {
  console.log(isOpen);
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
            <a href="/">
              <Icon src={LogoArida} />
            </a>
          </li>

          <StyledLink>
            <HeaderLink width="100%" href="/">
              Home
            </HeaderLink>
          </StyledLink>
          <StyledLink>
            <HeaderLink width="100%" href="/authors">
              Authors
            </HeaderLink>
          </StyledLink>
        </StyledList>
      </StyledMenu>
    </>
  );
};

export default SideDrawer;
