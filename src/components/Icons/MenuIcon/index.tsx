import styled from "styled-components";

import Menu from "assets/svg/icons-ui/menu.svg?react";

export const MenuIcon = styled(Menu)<{ $size?: string; $color?: string }>`
  width: ${(props) => props.$size ?? "2.4rem"};
  height: ${(props) => props.$size ?? "2.4rem"};
  color: ${(props) => props.$color ?? "var(--color-icon)"};

  aspect-ratio: 1 / 1;
`;
