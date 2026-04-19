import styled from "styled-components";
import { Button } from "../Button";

export const MenuStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-self: center;
  align-items: center;
  max-width: 126rem;
  width: 100%;
  padding: 0 4rem;
  position: absolute;
  min-height: 8rem;
`

export const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);;
`

export const MenuList = styled.div<{$active: boolean}>`
  display: flex;
  flex-direction: column;
  transition-property: right;
  transition-duration: .2s;
  transition-timing-function: ease-in-out;

  @media screen and (max-width: 1024px) {
    position: fixed;
    right: ${({ $active }) => $active ? "0" : "-33rem"};;
    top: 0;
    bottom: 0;
    width: 33rem;
    height: 100vh;
    background: var(--color-neutral-white);

    border-top-left-radius: .8rem;
    border-bottom-left-radius: .8rem;
  }
  
  @media screen and (min-width: 1024px) {
    position: static;
    gap: 2rem;
  }
`

export const MenuListInner = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 2.4rem 4.8rem 12rem 2.4rem;
  }

  @media screen and (min-width: 1024px) {
    gap: 2rem;
  }
`

export const MenuMobileHeader = styled.div`
  padding-bottom: 2.4rem;
  margin-bottom: 1.6rem;
  border-bottom: .1rem solid var(--color-divisor);
  display: none;

  @media screen and (max-width: 1024px) {
    display: block
  }
`

export const MenuButtonClose = styled(Button)`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  padding: .8rem;
  width: 4rem;
  height: 4rem;
  z-index: 3;
  pointer-events: auto;
  cursor: pointer;
`

export const MenuLink = styled.a`
  display: flex;
  color: var(--color-text-primary);
  font-size: 1.6rem;
  font-family: "Whitney", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  line-height: 2.4rem;
  
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  &:where([data-show="mobile-only"]) {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    padding: .8rem 1.6rem;
    font-weight: 300;

    &:where([data-state="active"]) {
      background: var(--color-surface-active-menu);
      color: var(--color-text-link);
      border-radius: .8rem;
    }

    &:where([data-show="mobile-only"]) {
      display: flex;
    }
  }
  
  @media screen and (min-width: 1024px) {
    color: var(--color-neutral-white);
    gap: 2rem;
    padding: 1rem;
    font-weight: 600;
  }
`

export const MenuButtonDownload = styled(Button)`
  position: absolute;
  left: 2.4rem;
  right: 2.4rem;
  bottom: 2.4rem;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`

export const MenuButtonToggle = styled(Button)`
  display: block;
  background: transparent;
  padding: 0;
  display: flex;
  align-items: center;

  &:hover {
    box-shadow: none;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`

export const MenuButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`
