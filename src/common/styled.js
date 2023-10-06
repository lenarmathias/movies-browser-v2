import styled, { css } from "styled-components";

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