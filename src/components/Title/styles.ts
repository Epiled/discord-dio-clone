import styled from "styled-components";

export const TitleStyled = styled.h2`
  font-family: "Ginto Nord", "Whitney", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: 700;
  font-size: 3.2rem;
  font-size: clamp(2rem, 4vw, 4rem);
  line-height: 120%;
  letter-spacing: 0;
  color: var(--color-text-primary);

  @media screen and (min-width: 768px) {
    grid-area: title;
    font-size: 4.8rem;
  }
`
