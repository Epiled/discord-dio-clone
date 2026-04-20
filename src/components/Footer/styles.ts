import styled from "styled-components";
import { Title } from "../Title";

export const FooterStyled = styled.footer`
  background: var(--footer);
  padding: 8rem 2.4rem 6.4rem 2.4rem;

  @media screen and (min-width: 764px) {
    padding: 8rem 4rem 6.4rem 4rem;
  }

  @media screen and (min-width: 1024px) {
    justify-items: center;
  }
`

export const FooterMain = styled.div`
  display: grid;
  gap: 5.6rem;
  padding-bottom: 4rem;
  margin-bottom: 3.2rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    height: .1rem;
    background: var(--color-brand-primary);
    left: 0;
    right: 0;
    bottom: 0;
  }

  @media screen and (min-width: 764px) {
    grid-template-columns: repeat(8, 1fr);
    gap: 0 2rem;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(12, 1fr);
    max-width: 126rem;
    padding: 0 4rem 4rem 4rem;

    &::after {
      left: 4rem;
      right: 4rem;
    }
  }
`

export const FooterHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media screen and (min-width: 764px) {
    grid-column: span 3;
  }
`

export const FooterTitle = styled(Title)`
  color: var(--color-brand-primary);
  font-size: 3.2rem;
  font-weight: 800;
  line-height: 95%;
  text-transform: uppercase;
  text-rendering: geometricPrecision;
`

export const FooterSubtitle = styled.h3`
  color: var(--color-brand-primary);
  font-family: "Whitney", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 2.4rem;
`

export const FooterSocial = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.4rem;
  color: var(--color-neutral-white);
`;

export const FooterNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: auto;
  gap: 4rem 2rem;

  @media screen and (min-width: 764px) {
    grid-column-start: 5;
    grid-column-end: 9;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(8, minmax(0, 1fr));
    grid-column-end: 13;
  }
`

export const FooterColumn = styled.div`
  grid-column: span 1;
  display: flex;
  flex-direction: column;
  gap: .8rem;

  @media screen and (min-width: 1024px) {
    grid-column: span 2;
  }
`

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: .8rem;
`

export const FootLink = styled(FooterSubtitle).attrs({ as: "a" })`
  display: flex;
  align-items: center;
  color: var(--color-neutral-white);

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  @media screen and (min-width: 1024px) {
    max-width: 126rem;
    padding: 0 4rem;
  }
`
