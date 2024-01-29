import styled from "styled-components";
import { ReactComponent as Search } from "../../../images/searchIcon.svg";

export const SearchContainer = styled.div`
  max-width: 432px;
  width: 100%;
  height: 48px;
  padding: 12px 24px;
  border: 1px solid ${({ theme }) => theme.color.colorDivider};
  border-radius: 33px;
  background: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.narrow}) {
    max-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
    height: 44px;
    padding: 14px 16px;
    gap: 8px;
  }
`;

export const SearchIcon = styled(Search)`
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 16px;
    height: 16px;
  }
`;

export const SearchInput = styled.input`
  color: ${({ theme }) => theme.color.darkerGrey};
  width: 100%;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  border: none;

  &:focus {
    outline: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
    line-height: 130%;
  }
`;