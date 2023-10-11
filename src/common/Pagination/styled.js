import styled, { css } from "styled-components";
import { ReactComponent as VectorIcon } from "../../images/vectorIcon.svg";

export const PaginationContainer = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-gap: 24px;
  justify-content: center;
  align-items: center;

  ${({ $peoplePagination }) => $peoplePagination && css`
    margin-top: 56px;
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    grid-gap: 8px;
    margin-top: 32px;

    ${({ $peoplePagination }) => $peoplePagination && css`
      grid-gap: 8px;
      margin-top: 50px;
    `}
  }
`;

export const PageButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    grid-gap: 8px;
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
    width: 5px;
    height: 8px;

    ${({ $mobileOnly }) =>
    $mobileOnly &&
    css`
        display: block;
      `}
  }
`;

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

export const MiddleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    grid-gap: 2px;
  }
`;