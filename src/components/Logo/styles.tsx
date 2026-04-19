import styled, { css } from "styled-components";

import Discord from "assets/svg/logos/logo.svg?react";

import type { LogoVariation } from ".";

export const LogoStyled = styled(Discord)<{ $variation: LogoVariation }>`
  width: 12.4rem;
  height: auto;

  ${({ $variation }) => {
    switch ($variation) {
      case "reverse":
        return css`
          color: var(--color-logo-reverse);
        `;
      case "default":
      default:
        return css`
          color: var(--color-neutral-white);
        `;
    }
  }}
`;
