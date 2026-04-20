import styled from "styled-components";

import Background4 from "assets/svg/icons-art/background-4.svg";

export const CallToActionStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 3rem 2.4rem 8rem 2.4rem;

  background-image: url("${Background4}");
  background-repeat: no-repeat;
  background-position: top center;

  background-color: var(--color-surface-active-menu);

  background-size: auto; 

  @media screen and (min-width: 768px) {
    align-items: center;
    padding: 3rem 4rem 8rem 4rem;
  }

  @media screen and (min-width: 1024px) {
    padding-bottom: 12rem;
  }
`;

export const CallToActionTitle = styled.h2`
  color: var(--color-neutral-black);
  font-weight: 600;
  font-size: 3.2rem;
  line-height: 120%;
  font-family: "Ginto Nord", "Whitney", "Helvetica Neue", "Helvetica","Arial", sans-serif;
`