import styled, { css } from "styled-components";

export const ButtonStyled = styled.button<{ $appearance?: "default" | "inverse", $size?: "small" | "large" }>`
  border-radius: 2.8rem;
  border: 0;
  outline: 0;
  line-height: 2.4rem;
  font-weight: 500;
  font-family: "Whitney", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  transition-property: background-color, color, box-shadow;
  transition-duration: .2s;
  transition-timing-function: ease-in-out;

  &:hover {
    box-shadow: 0 .8rem 1.5rem var(--color-shadow);
    cursor: pointer;
  }

  ${({ $appearance }) => {
    switch($appearance) {
      case 'inverse':
        return css`
          background: var(--color-text-primary);
          color: var(--color-neutral-white);

          &:hover {
            background: var(--color-button-inverse-hover);
          }
        `;
      case 'default':
      default:
        return css`
          background: var(--color-neutral-white);
          color: var(--color-text-primary);

          &:hover {
            color: var(--color-brand-primary);
          }
        `;
      }
  }}

  ${({ $size }) => {
    switch($size) {
      case 'small':
        return css`
          font-size: 1.4rem;
          padding: 0.7rem 1.6rem;
        `;
      case 'large':
      default:
        return css`
          font-size: 2rem;
          padding: 1.6rem 3.2rem;
        `;
      }
  }}
`
