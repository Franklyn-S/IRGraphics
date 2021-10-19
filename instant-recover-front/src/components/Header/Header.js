import React, { useState } from "react";
import * as S from "./Header.style";
import LogoArida from "assets/images/ARiDa-logo.png";
import DrawerToggle from "./SideDrawer/DrawerToggle";
import SideDrawer from "./SideDrawer";

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const isSelected = (path) => window.location.pathname === path;
  return (
    <S.Header>
      <S.Items>
        <S.Item>
          <S.HeaderLink href="/">
            <img width={150} height={75} src={LogoArida} alt="Logo Arida"></img>
          </S.HeaderLink>
        </S.Item>
        <S.Item>
          <S.HeaderLink href="/" selected={isSelected("/")}>
            Home
          </S.HeaderLink>
        </S.Item>
        <S.Item>
          <S.HeaderLink href="/authors" selected={isSelected("/authors")}>
            Authors
          </S.HeaderLink>
        </S.Item>
      </S.Items>
      <DrawerToggle onCLick={() => setShowDrawer(true)} />
      <img
        width={150}
        height={75}
        src={LogoArida}
        style={{ margin: "auto" }}
        alt="Logo Arida"
      ></img>
      <SideDrawer isOpen={showDrawer} close={() => setShowDrawer(false)} />
    </S.Header>
  );
};

export default Header;
