import styled, { css } from "styled-components";

export const ButtonStyled = styled.button<{ $appearance?: "default" | "inverse" }>`
  border-radius: 2.8rem;
  border: 0;
  outline: 0;
  font-family: "Open Sans", sans-serif;
  font-size: 1.6rem;
  line-height: 100%;
  padding: 1.6rem;
  
  @media screen and (min-width: 768px) {
    padding: 1.1rem 2.4rem;
  }

  ${({ $appearance }) => {
    switch($appearance) {
      case 'inverse':
        return css`
          background: rgba(35, 39, 42, 1);
          color: rgba(255, 255, 255, 1);
        `;
      case 'default':
      default:
        return css`
          background: rgba(255, 255, 255, 1);
          color: rgba(35, 39, 42, 1);
        `;
      }
  }}
`
