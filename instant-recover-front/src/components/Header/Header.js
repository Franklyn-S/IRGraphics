import React, { useState } from "react";
import * as S from "./Header.style";
import LogoArida from "assets/images/ARiDa-logo.png";
import DrawerToggle from "./SideDrawer/DrawerToggle";
import SideDrawer from "./SideDrawer";

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <S.Header>
      <S.Items>
        <S.Item>
          <S.HeaderLink to="/">
            <S.DesktopImg
              width={150}
              height={75}
              src={LogoArida}
              alt="Logo Arida"
            />
          </S.HeaderLink>
        </S.Item>
        <S.Item>
          <S.HeaderLink to="/">Home</S.HeaderLink>
        </S.Item>
        <S.Item>
          <S.HeaderLink to="/authors">Authors</S.HeaderLink>
        </S.Item>
      </S.Items>
      <DrawerToggle onCLick={() => setShowDrawer(true)} />
      <S.MobileImg
        width={150}
        height={75}
        src={LogoArida}
        style={{ margin: "auto" }}
        alt="Logo Arida"
      />
      <SideDrawer isOpen={showDrawer} close={() => setShowDrawer(false)} />
    </S.Header>
  );
};

export default Header;
