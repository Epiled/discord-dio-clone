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
  }
`

export const AppTitle = styled(Title)`
  font-size: 3.2rem;
  white-space: pre-line;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }
`
