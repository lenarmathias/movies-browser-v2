import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as MissingPhotoIcon } from "../images/missingProfilePhotoIcon.svg";

const boxShadowColor = ({ theme }) => theme.color.boxShadow;

export const SmallGreyText = styled.p`
    color: ${({ theme }) => theme.color.darkerGrey};
    margin: 0;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;

    ${({ $boldBlackText }) => $boldBlackText && css`
        font-weight: 600;
        color: ${({ theme }) => theme.color.black};
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        font-size: 13px;
        line-height: 130%;

        ${({ $paginationText }) => $paginationText && css`
            font-size: 10px;
            line-height: 24px;
        `}
    }
`;

export const SmallTile = styled.div`
    height: 36px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.colorDivider};

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    color: ${({ theme }) => theme.color.black};

    ${({ $pageButton }) => $pageButton && css`
        background-color: ${({ theme }) => theme.color.lightBlue};
        border: none;
        
        &:disabled {
            background-color: ${({ theme }) => theme.color.colorDivider};

            path {
                fill: ${({ theme }) => theme.color.darkerGrey};
            }
        }
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        height: 19px;
        padding: 4px 8px;

        font-size: 10px;
        line-height: 110%;

        ${({ $pageButton }) => $pageButton && css`
            height: 23px;
            padding: 8px 12px;
        `}
    }
`;

export const MovieDetailsPhotoTile = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    width: 208px;
    height: 346px;
    display: grid;
    grid-template-rows: auto 1fr 1fr;
    padding: 16px;
    border-radius: 5px;
    box-shadow: 0px 4px 12px 0px ${boxShadowColor};

    @media (max-width: ${({ theme }) => theme.breakpoints.wideMobile}) {
        width: 136px;
        height: 245px;
        padding: 8px;
    }
`;

export const MovieDetailsActorsPhoto = styled.img`
    width: 177px;
    height: 246px;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.wideMobile}) {
        width: 120px;
        height: 178px;
    }
`;

export const MissingProfilePhoto = styled(MovieDetailsActorsPhoto)`
  background-color: ${({ theme }) => theme.color.silver};
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const MissingProfilePhotoIcon = styled(MissingPhotoIcon)`
  width: 120px;
  height: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 48px;
    height: 48px;
  }
`;

export const MovieDetailsActorsName = styled.p`
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    color: ${({ theme }) => theme.color.black};
    margin-top: 10px;
    margin-bottom: 0px;

    @media (max-width: ${({ theme }) => theme.breakpoints.wideMobile}) {
        font-size: 14px;
    }
`;

export const ContentLink = styled(Link)`
  text-decoration: none;
`;