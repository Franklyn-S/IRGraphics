import * as S from "./Footer.style";
import LogoArida from "assets/images/ARiDa-logo.png";

const Footer = () => {
  return (
    <S.Footer>
      <img width={150} height={75} src={LogoArida} alt="Logo Arida" />
    </S.Footer>
  );
};

export default Footer;
