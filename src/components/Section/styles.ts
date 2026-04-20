import styled, { css } from "styled-components";

const sectionBackgrounds = {
  clear: 'var(--color-surface-active-menu)',
  default: 'var(--color-neutral-white)'
};

export const SectionStyled = styled.section<{ type: "default" | "clear" }>`
  display: flex;
  justify-content: center;
  padding: 5.6rem 2.4rem;
  background: ${({ type }) => sectionBackgrounds[type] || sectionBackgrounds.default};

  @media screen and (min-width: 768px) {
    padding: 8rem 4rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 12rem 0;
  }
`

export const SectionWrapper = styled.div<{ 
  type: "default" | "clear", variation: "default" | "reverse" | "column" }>`
  display: grid;
  grid-template-areas: 
    "image"
    "content";
  justify-content: center;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    max-width: 126rem;
    padding: 0 4rem;
  }

  ${({ variation }) => {
    switch(variation) {
      case 'column':
        return css`
          grid-template-areas: 
            "content"
            "image";
          `;
      case 'reverse':
        return css`
          @media screen and (min-width: 768px) {
            grid-template-areas: 
              "content content content content image image image image";
            grid-template-columns: repeat(8, 1fr);
          }

          @media screen and (min-width: 1024px) {
            grid-template-areas: 
              "content content content content . image image image image image image image";
            grid-template-columns: repeat(12, 1fr);
          }
        `;
      case 'default':
      default:
        return css`
          @media screen and (min-width: 768px) {
            grid-template-areas: 
              "image image image image content content content content";
            grid-template-columns: repeat(8, 1fr);
          }

          @media screen and (min-width: 1024px) {
            grid-template-areas: 
              "image image image image image image image . content content content content";
            grid-template-columns: repeat(12, 1fr);
          }
        `;
    }
  }}
`
