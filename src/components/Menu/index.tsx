import { Button } from "../Button";
import { MenuLink, MenuList, MenuLogo, MenuStyled } from "./styles";

import Logo from "assets/svg/logos/logo.svg";

export const Menu = () => {
  return (
    <MenuStyled>
      <MenuLogo src={Logo} width={124} height={34} />
      <MenuList>
        <MenuLink>Baixar</MenuLink>
        <MenuLink>Nitro</MenuLink>
        <MenuLink>Segurança</MenuLink>
        <MenuLink>Suporte</MenuLink>
        <MenuLink>Blog</MenuLink>
        <MenuLink>Carreiras</MenuLink>
      </MenuList>
      <Button text="Entrar" size="small" />
    </MenuStyled>
  );
};
