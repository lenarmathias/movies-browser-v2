import styled, { css } from "styled-components";
import { ReactComponent as MissingPhotoIcon } from "../../../images/missingProfilePhotoIcon.svg";
import { boxShadowColor } from "../../styled";

export const PeopleTileContainer = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    max-width: 208px;
    max-height: auto;
    display: grid;
    grid-template-rows: auto, repeat(2, 1fr);
    padding: 16px;
    border-radius: 5px;
    box-shadow: 0px 4px 12px 0px ${boxShadowColor};

    @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        padding: 8px;
    }
`;

export const PeopleTilePhoto = styled.img`
    width: 100%;
    max-width: 177px;
    max-height: auto;
    border-radius: 5px;
`;

export const MissingProfilePhoto = styled(PeopleTilePhoto)`
  background-color: ${({ theme }) => theme.color.silver};
  display: grid;
  align-items: center;
  justify-content: center;

  ${({ $portfolioPhoto }) => $portfolioPhoto && css`
        width: 100%;
        height: 100%;
        max-width: 399px;
        max-height: 564px;
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.wideMobile}) {
        width: 120px;
        height: 178px;

        ${({ $portfolioPhoto }) => $portfolioPhoto && css`
            width: auto;
            height: 100%;
            max-width: auto;
            max-height: 163px;
        `}
    }
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
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    color: ${({ theme }) => theme.color.black};
    margin-top: 10px;
    margin-bottom: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoints.wideMobile}) {
        font-size: 14px;
    }
`;