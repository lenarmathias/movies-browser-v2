import styled from "styled-components";
import { ReactComponent as warningIcon } from "./warning.svg";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Warning = styled(warningIcon)`
  max-width: 120px;
  max-height: 120px;
  display: block;
  margin: 0 auto;
  margin-top: 180px;
`;

export const Info = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 14px;
    text-align: center;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  border: none;
  background-color: ${({ theme }) => theme.color.blue};
  padding: 16px 24px;
  border-radius: 5px;
  text-decoration-line: none;

  font-size: 14px;
  font-family: Open Sans;
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;
  line-height: 1.9;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    padding: 8px 12px;

    font-weight: 500;
    line-height: 1.4;
  }
`;