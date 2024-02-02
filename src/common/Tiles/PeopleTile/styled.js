import styled, { css } from "styled-components";
import { ReactComponent as MissingPhotoIcon } from "../../../images/missingProfilePhotoIcon.svg";
import { boxShadowColor } from "../../styled";

export const PeopleTileContainer = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  width: fit-content;
  min-height: auto;
  height: 100%;
  display: grid;
  grid-template-rows: auto, repeat(2, 1fr);
  padding: 16px;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px ${boxShadowColor};
  align-items: baseline;
  margin: auto;
`;

export const PeopleTilePhoto = styled.img`
  width: 100%;
  max-width: 177px;
  border-radius: 5px;
  max-height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
  }
`;

export const MissingProfilePhoto = styled(PeopleTilePhoto)`
  background-color: ${({ theme }) => theme.color.silver};
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 177px;
  height: 237px;

  ${({ $portfolioPhoto }) =>
    $portfolioPhoto &&
    css`
      width: 100%;
      height: 100%;
      max-width: 399px;
      max-height: 564px;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    height: 178px;
    width: 120px;
  }

  ${({ $portfolioPhoto }) =>
    $portfolioPhoto &&
    css`
    width: auto;
    height: 100%;
    max-width: auto;
    max-height: 163px;
  `}
`;

export const MissingProfilePhotoIcon = styled(MissingPhotoIcon)`
  width: 120px;
  height: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 48px;
    height: 48px;
  }
`;

export const PeopleTileName = styled.p`
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  color: ${({ theme }) => theme.color.black};
  margin-top: 0px;
  margin-bottom: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.wideMobile}) {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 2px;
  }
`;