import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Logo } from "../Logo";
import {
  MenuButtonClose,
  MenuButtonDownload,
  MenuButtons,
  MenuButtonToggle,
  MenuLink,
  MenuList,
  MenuListInner,
  MenuMobileHeader,
  MenuOverlay,
  MenuStyled,
} from "./styles";
import { MenuIcon } from "../Icons/MenuIcon";
import { DownloadIcon } from "../Icons/DownloadIcon";
import { CloseIcon } from "../Icons/CloseIcon";
import { ChevronIcon } from "../Icons/ChevronIcon";

export const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const toggleMenu = () => {
    setActiveMenu((prev) => !prev);
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        const mobileStatus = width <= 1024;
        setIsMobile(mobileStatus);

        if (!mobileStatus) {
          setActiveMenu(false);
        }
      }
    });

    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <MenuStyled>
      {activeMenu && isMobile && <MenuOverlay onClick={toggleMenu} />}
      <MenuLink padding="0">
        <Logo />
      </MenuLink>

      <MenuList $active={activeMenu}>
        <MenuListInner>
          <MenuMobileHeader>
            <Logo variation="reverse" />
            <MenuButtonClose
              icon={<CloseIcon aria-hidden="true" />}
              onClick={toggleMenu}
            />
          </MenuMobileHeader>
          <MenuLink data-state="active" data-show="mobile-only">
            Início
          </MenuLink>
          <MenuLink data-state="inactive">Baixar</MenuLink>
          <MenuLink data-state="inactive">Nitro</MenuLink>
          <MenuLink data-state="inactive">
            Segurança{" "}
            <ChevronIcon
              $rotate={270}
              aria-hidden="true"
              data-show="mobile-only"
            />
          </MenuLink>
          <MenuLink data-state="inactive" data-show="mobile-only">
            Academia de Moderadores
            <ChevronIcon $rotate={270} aria-hidden="true" />
          </MenuLink>
          <MenuLink data-state="inactive">Suporte</MenuLink>
          <MenuLink data-state="inactive">Blog</MenuLink>
          <MenuLink data-state="inactive">Carreiras</MenuLink>
          <MenuButtonDownload
            icon={
              <DownloadIcon
                $color="var(--color-neutral-white)"
                aria-hidden="true"
              />
            }
            text="Baixar na App Store"
            size="small"
            appearance="brand"
          />
        </MenuListInner>
      </MenuList>

      <MenuButtons>
        <Button text="Entrar" size="small" />
        <MenuButtonToggle
          icon={
            <MenuIcon
              $size="4rem"
              $color="var(--color-neutral-white)"
              aria-hidden="true"
            />
          }
          size="small"
          onClick={toggleMenu}
        />
      </MenuButtons>
    </MenuStyled>
  );
};
