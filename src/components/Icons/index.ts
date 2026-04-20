import styled from "styled-components";

export interface IIcon {
  $size?: string;
  $color?: string;
  $rotate?: number;
}

export const createIcon = (SvgComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>) => {
  return styled(SvgComponent)<IIcon>`
      width: ${(props) => props.$size ?? "2.4rem"};
      height: ${(props) => props.$size ?? "2.4rem"};
      color: ${(props) => props.$color ?? "currentColor"};
      transform: rotate(${(props) => props.$rotate ?? 0}deg);
      aspect-ratio: 1 / 1;
      flex-shrink: 0;

      &:where([data-show="mobile-only"]) {
        display: flex;
      }

      @media screen and (min-width: 1024px) {
        &:where([data-show="mobile-only"]) {
          display: none;
        }
      }
    `;
};