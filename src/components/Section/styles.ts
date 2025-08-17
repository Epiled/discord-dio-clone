import styled, { css } from "styled-components";

export const SectionStyled = styled.section<{ type: "default" | "clear" }>`
  display: grid;
  grid-template-areas: 
    "image"
    "content";
  justify-content: center;
  gap: 2.7rem;
  padding: 4rem 2.4rem;

  @media screen and (min-width: 768px) {
    align-items: center;
    gap: 1.6rem;
    padding: 4rem;
  }

  ${({ type }) => {
    switch(type) {
      case 'clear':
        return css`
          background: rgba(246, 246, 246, 1);

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
            background: rgba(255, 255, 255, 1);

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
