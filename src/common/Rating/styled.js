import { ReactComponent as StarIcon } from "../../images/shape-star.svg";
import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    display: grid;
    justify-content: start;
    align-items: baseline;
    grid-template-columns: auto auto;
    gap: 8px;
  }
`;

export const RatingWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: start;
  align-items: baseline;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    gap: 4px;
  }
`;

export const Star = styled(StarIcon)`
  height: 40px;
  width: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 20px;
    width: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    height: 16px;
    width: 16px;
  }
`;

export const Rate = styled.span`
  color: ${({ theme }) => theme.color.white};
  font-size: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 16px;
`;

export const MaxRate = styled.span`
  color: ${({ theme }) => theme.color.white};
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 10px;
`;

export const Votes = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-size: 16px;
  margin-top: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
    margin-top: 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 10px;
`;
