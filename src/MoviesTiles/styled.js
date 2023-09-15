import styled from "styled-components";

const boxShadowColor = ({ theme }) => theme.color.boxShadow;

export const MoviesTilesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        grid-gap: 16px;
    }
`;

export const MovieTile = styled.div`
    width: 324px;
    height: 650px;
    padding: 16px;
    background-color: ${({ theme }) => theme.breakpoints.mobile};
    box-shadow: 0px 4px 12px 0px ${boxShadowColor};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 288px;
        height: 201px;
    }
`;