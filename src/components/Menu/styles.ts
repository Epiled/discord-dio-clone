import styled from "styled-components";
import { LoadImage } from "../LoadImage";

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

export const MenuLogo = styled(LoadImage)`
  max-width: 12.4rem;
`

export const MenuList = styled.div`
  display: flex;
  gap: 2rem;
  cursor: pointer;
`

export const MenuLink = styled.a`
  color: #ffffff;
  padding: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  font-family: "Whitney", "Helvetica Neue", "Helvetica", "Arial", sans-serif;


  &:hover {
    text-decoration: underline;
  }
`