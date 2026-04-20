import styled from "styled-components";
import { ChevronIcon } from "../Icons/ChevronIcon";


export const SelectLanguageStyled = styled.div`
  position: relative;
`

export const SelectLanguageTrigger = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;

  &:hover {
    cursor: pointer;
  }
`
export const SelectLanguageFlag = styled.img`
  width: 2.4rem;
  height: 1.6rem;  
`

export const SelectLanguageIcon = styled(ChevronIcon)`
  width: 1.4rem;
  height: 1.4rem;  
`

export const SelectLanguageButton = styled.button`
  display: flex;
  align-items: center;
  gap: .8rem;
  font-size: 1.4rem;
  font-family: "Whitney", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  line-height: 1.8rem;
  background: transparent;
  border: 0;
  padding: 0;
  color: var(--color-neutral-white);

  &:hover {
    cursor: pointer;
  }
`

export const SelectLanguageDropDown = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: calc(100% + .8rem);
  max-height: 32rem;
  min-width: 15rem;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  background: var(--color-neutral-white);
  border-radius: .8rem;
  box-shadow: 0 .1rem .1rem rgba(0, 0, 0, .1);

  &:hover {
    cursor: pointer;
  }
`

export const SelectLanguageItem = styled.div`
  display: flex;
  gap: .8rem;
  padding: .8rem;
  color: var(--color-text-primary);
  font-weight: 300;
  font-size: 1.4rem;
  font-family: "Whitney", "Helvetica Neue", "Helvetica", "Arial", sans-serif;

  &:hover {
    background: rgba(79, 84, 92, .16);
  }
`