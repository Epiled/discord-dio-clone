import { getDeviceOS } from "../../hooks/getDeviceOS";
import { Button } from "../Button";
import { FacebookIcon } from "../Icons/Facebook";
import { InstagramIcon } from "../Icons/Instagram/Index";
import { TwitterIcon } from "../Icons/Twitter";
import { YoutubeIcon } from "../Icons/Youtube";
import { Logo } from "../Logo";
import { SelectLanguage } from "../SelectLanguage";
import {
  FooterBottom,
  FooterColumn,
  FooterHeader,
  FooterList,
  FooterMain,
  FooterNav,
  FooterSocial,
  FooterStyled,
  FooterSubtitle,
  FooterTitle,
  FootLink,
} from "./styles";

export const Footer = () => {
  const os = getDeviceOS();

  return (
    <FooterStyled>
      <FooterMain>
        <FooterHeader>
          <FooterTitle text="Imagine um lugar" />

          <SelectLanguage />

          <FooterSocial>
            <FootLink>
              <TwitterIcon aria-hidden="true" />
            </FootLink>
            <FootLink>
              <InstagramIcon aria-hidden="true" />
            </FootLink>
            <FootLink>
              <FacebookIcon aria-hidden="true" />
            </FootLink>
            <FootLink>
              <YoutubeIcon aria-hidden="true" />
            </FootLink>
          </FooterSocial>
        </FooterHeader>

        <FooterNav>
          <FooterColumn>
            <FooterSubtitle>Produto</FooterSubtitle>
            <FooterList>
              <FootLink>Baixar</FootLink>
              <FootLink>Nitro</FootLink>
              <FootLink>Status</FootLink>
            </FooterList>
          </FooterColumn>

          <FooterColumn>
            <FooterSubtitle>Empresa</FooterSubtitle>
            <FooterList>
              <FootLink>Sobre</FootLink>
              <FootLink>Empregos</FootLink>
              <FootLink>Marca</FootLink>
              <FootLink>Sala de imprensa</FootLink>
            </FooterList>
          </FooterColumn>

          <FooterColumn>
            <FooterSubtitle>Recursos</FooterSubtitle>
            <FooterList>
              <FootLink>Faculdade</FootLink>
              <FootLink>Suporte</FootLink>
              <FootLink>Segurança</FootLink>
              <FootLink>Blog</FootLink>
              <FootLink>Comentários</FootLink>
              <FootLink>Desenvolvedores</FootLink>
              <FootLink>StreamKit</FootLink>
            </FooterList>
          </FooterColumn>

          <FooterColumn>
            <FooterSubtitle>Política</FooterSubtitle>
            <FooterList>
              <FootLink>Termos</FootLink>
              <FootLink>Privacidade</FootLink>
              <FootLink>Configurações de cookies</FootLink>
              <FootLink>Diretrizes</FootLink>
              <FootLink>Reconhecimentos</FootLink>
              <FootLink>Licenças</FootLink>
              <FootLink>Moderação</FootLink>
            </FooterList>
          </FooterColumn>
        </FooterNav>
      </FooterMain>

      <FooterBottom>
        <FootLink>
          <Logo />
        </FootLink>
        {os === "Android" && (
          <Button appearance="brand" size="small" text="Baixar" />
        )}
        {os === "iOS" && (
          <Button appearance="brand" size="small" text="Baixar" />
        )}
        {os === "Desktop/Other" && (
          <Button appearance="brand" size="small" text="Registrar" />
        )}
      </FooterBottom>
    </FooterStyled>
  );
};
