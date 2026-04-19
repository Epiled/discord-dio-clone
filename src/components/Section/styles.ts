import styled, { css } from "styled-components";

export const SectionStyled = styled.section<{ type: "default" | "clear" }>`
  display: grid;
  grid-template-areas: 
    "image"
    "content";
  justify-content: center;
  gap: 2rem;
  padding: 5.6rem 2.4rem;

  @media screen and (min-width: 768px) {
    align-items: center;
    padding: 8rem 4rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 12rem 4rem;
  }

  ${({ type }) => {
    switch(type) {
      case 'clear':
        return css`
          background: var(--color-surface-active-menu);

          @media screen and (min-width: 768px) {
            grid-template-areas: 
              "content image"
              "content image";
            grid-template-columns: 34.8rem minmax(0, 60rem);
          }
        `;
      case 'default':
        default:
          return css`
            background: var(--color-neutral-white);

            @media screen and (min-width: 768px) {
              grid-template-areas: 
                "image content"
                "image content";
              grid-template-columns: minmax(0, 60rem) 34.8rem;
            }
          `;
    }
  }}
`
