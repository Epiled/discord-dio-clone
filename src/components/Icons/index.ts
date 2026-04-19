import styled from "styled-components";

export interface IIcon {
  $size?: string;
  $color?: string;
}

export const createIcon = (SvgComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>) => {
  return styled(SvgComponent)<IIcon>`
      width: ${(props) => props.$size ?? "2.4rem"};
      height: ${(props) => props.$size ?? "2.4rem"};
      color: ${(props) => props.$color ?? "var(--color-icon)"};
      aspect-ratio: 1 / 1;
      flex-shrink: 0;
    `;
};