import styled from "styled-components";

export const BannerStyled = styled.section`
  background: var(--color-surface-banner);
  background-size: 100%, cover;
  background-position: center;
  min-height: 62.6rem;
  padding: 8rem 2.4rem 0 2.4rem;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 8rem 4rem 8rem 4rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 20rem 4rem 12rem 4rem;
  }
`

export const BannerWrapper = styled.div`
  display: grid;
  gap: 2rem;
  position: relative;
  z-index: 2;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(12, 1fr);
  }
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: span 5; 
  padding: 5.6rem 0;
  max-width: 76rem;

  @media screen and (min-width: 768px) {
    gap: 4rem;
    padding: 8rem 0;
  }

  @media screen and (min-width: 1024px) {
    grid-column: 3 / span 8;
    text-align: center;
    align-items: center;
    padding: 0;
    max-width: 128rem;
  }
`

export const BannerTitle = styled.h1`
  color: var(--color-neutral-white);
  font-size: 4.4rem;
  font-size: clamp(2.4rem, 5vw, 4.4rem);
  font-weight: 800;
  font-family: "Ginto Nord", "Whitney", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  line-height: 95%;
  text-align: left;
  text-transform: uppercase;
  text-rendering: geometricPrecision;
  white-space: pre-line;
  
  @media screen and (min-width: 768px) {
    font-size: 5.6rem;
  }

  @media screen and (min-width: 1024px) {
    text-align: center;
  }
`

export const BannerText = styled.p`
  color: var(--color-neutral-white);
  font-size: clamp(1.6rem, 2vw, 2rem);
  line-height: 1.625;
  font-family: "Whitney", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  text-align: left;

  @media screen and (min-width: 1024px) {
    text-align: center;
  }
`

export const BannerButtons = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2.4rem;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    justify-content: center;
  }
`

export const BannerImages = styled.div`
  @media screen and (min-width: 768px) {
    position: absolute;
    inset: 0;
  }
`

export const BannerBackground1 = styled.img`
  display: none;
  position: absolute;

  @media screen and (min-width: 768px) {
    display: block;
    top: auto;
    bottom: 0;
    left: 50%;
    margin-left: -1320px;
  }

  @media screen and (min-width: 1024px) {
    margin-left: -1280px;
  }
`
export const BannerBackground2 = styled.img`
  display: none;
  position: absolute;

  @media screen and (min-width: 768px) {
    display: block;
    bottom: 0;
    left: 50%;
    margin-left: -70px;
    z-index: 1;
  }

  @media screen and (min-width: 1024px) {
    display: block;
    bottom: 0;
    left: 50%;
    margin-left: 370px;
  }
`
export const BannerBackground3 = styled.img`
  position: relative;
  bottom: 0;
  left: -8rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    position: absolute;
    bottom: 0;
    left: 50%;
    display: block;
    height: auto;
    width: auto;
    max-width: none;
    margin-left: -1030px;
    transform: none;
    z-index: 1;
  }
`


