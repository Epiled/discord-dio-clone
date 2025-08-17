import styled from "styled-components";

import HeaderImage from "assets/img/header.png"

export const HeaderStyled = styled.header`
  background: url(${HeaderImage});
  background-size: cover;
  background-position: center;
  min-height: 46rem;
  padding: 7rem 0;
  align-content: center;
  justify-content: center;
  justify-items: center;

  @media screen and (min-width: 768px) {
    padding: 9.4rem 0;
  }
`

export const HeaderContent = styled.div`
  max-width: 76rem;
  display: grid;
  gap: 2.4rem;
  padding: 0 2.4rem;

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`

export const HeaderTitle = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-size: 3.2rem;
  line-height: 100%;
  text-align: left;
  text-transform: uppercase;
  white-space: pre-line;
  
  @media screen and (min-width: 768px) {
    text-align: center;
    font-size: 5.2rem;
  }
`

export const HeaderText = styled.p`
  color: rgba(255, 255, 255, 1);
  font-size: 1.6rem;
  text-align: left;
  font-family: 'Open Sans', sans-serif;

  @media screen and (min-width: 768px) {
    text-align: center;
  }
`

export const HeaderButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 2.4rem;
  }
`


