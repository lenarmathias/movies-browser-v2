import styled, { css } from "styled-components";

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

export const MiddleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    grid-gap: 2px;
  }
`;