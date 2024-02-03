import styled, { css } from "styled-components";
import { ReactComponent as VectorIcon } from "./vectorIcon.svg"

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    grid-gap: 4px;
  }
`;

export const MobileHide = styled.div`
  display: block;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    display: none;
  }
`;

export const PageVectorIcon = styled(VectorIcon)`
  width: 7px;
  height: 11px;

  ${({ $previousPage }) =>
        $previousPage &&
        css`
      transform: scaleX(-1);
    `}

  ${({ $mobileOnly }) =>
        $mobileOnly &&
        css`
      display: none;
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    max-width: 7px;
    max-height: 11px;

    ${({ $mobileOnly }) =>
        $mobileOnly &&
        css`
        display: block;
      `}
  }
`;