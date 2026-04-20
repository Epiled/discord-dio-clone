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
  FooterItem,
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
              <FooterItem>
                <FootLink>Baixar</FootLink>
              </FooterItem>
              <FooterItem>
                <FootLink>Nitro</FootLink>
              </FooterItem>
              <FooterItem>
                <FootLink>Status</FootLink>
              </FooterItem>
            </FooterList>
          </FooterColumn>

          <FooterColumn>
            <FooterSubtitle>Empresa</FooterSubtitle>
            <FooterList>
              <FooterItem>
                <FootLink>Sobre</FootLink>
              </FooterItem>
              <FooterItem>
                <FootLink>Empregos</FootLink>
              </FooterItem>
              <FooterItem>
                <FootLink>Marca</FootLink>
              </FooterItem>
              <FooterItem>
                <FootLink>Sala de imprensa</FootLink>
              </FooterItem>
            </FooterList>
          </FooterColumn>

          <FooterColumn>
            <FooterSubtitle>Recursos</FooterSubtitle>
            <FooterList>
              <FooterItem>
                <FootLink>Faculdade</FootLink>
              </FooterItem>
              <FooterItem>
                <FootLink>Suporte</FootLink>
              </FooterItem>
              <FooterItem>
                <FootLink>Segurança</FootLink>
              </FooterItem>
              <FooterItem>
                <FootLink>Blog</FootLink>
              </FooterItem>
              <FooterItem>
                <FootLink>Comentários</FootLink>
              </FooterItem>
              <FooterItem>
                <FootLink>Desenvolvedores</FootLink>
              </FooterItem>
              <FooterItem>
                <FootLink>StreamKit</FootLink>
              </FooterItem>
            </FooterList>
          </FooterColumn>

          <FooterColumn>
            <FooterSubtitle>Política</FooterSubtitle>
            <FooterList>
              <FooterItem>
                <FootLink>Termos</FootLink>
              </FooterItem>
              <FooterItem>
                <FootLink>Privacidade</FootLink>
              </FooterItem>
              <FooterItem>
                <FootLink>Configurações de cookies</FootLink>
              </FooterItem>
              <FooterItem>
                <FootLink>Diretrizes</FootLink>
              </FooterItem>
              <FooterItem>
                <FootLink>Reconhecimentos</FootLink>
              </FooterItem>
              <FooterItem>
                <FootLink>Licenças</FootLink>
              </FooterItem>
              <FooterItem>
                <FootLink>Moderação</FootLink>
              </FooterItem>
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
