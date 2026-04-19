import styled from "styled-components";

import { Section } from "./components/Section";
import { Title } from "./components/Title";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const AppSection = styled(Section)`
  grid-template-areas: 
    "content"
    "image";

  @media screen and (min-width: 768px) {
    grid-template-areas: 
      "content content"
      "image image";
    text-align: center;
    padding-bottom: 8rem;
  }
`

export const AppTitle = styled(Title)`
  font-size: 4rem;
  font-size: clamp(2rem, 4vw, 4rem);
  font-weight: 800;
  white-space: pre-line;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }
`
