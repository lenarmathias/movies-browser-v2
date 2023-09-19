import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as MissingPosterIcon } from "../images/missingMoviePoster.svg";
import { ReactComponent as StarIcon } from "../images/shape-star.svg";


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

export const ContentLink = styled(Link)`
    text-decoration: none;
`;

export const MovieTile = styled.div`
    width: 324px;
    height: 650px;
    padding: 16px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.breakpoints.mobile};
    box-shadow: 0px 4px 12px 0px ${boxShadowColor};
    position: relative;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        min-width: 288px;
        height: 201px;
        display: grid;
        grid-template-columns: max-content 1fr;
        grid-gap: 16px;
    }
`;

export const MissingMoviePoster = styled.div`
    width: 292px;
    height: 434px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.silver};
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 114px;
        height: 169px;
    }
`;

export const MissingMoviePosterIcon = styled(MissingPosterIcon)`
    width: 120px;
    height: 120px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 48px;
        height: 48px;
    }
`;

export const MovieInfoContainer = styled.div`
    height: 100%;
    margin-top: 16px;
    display: grid;
    grid-template-rows: repeat(3, max-content);
    grid-gap: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-top: 0;
    }
`;

export const MovieTitle = styled.h2`
    color: ${({ theme }) => theme.color.black};
    margin: 0;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 16px;
    }
`;

export const GenresContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

export const RatingContainer = styled.div`
    height: 24px;
    position: absolute;
    bottom: 16px;
    left: 16px;
    display: grid;
    grid-template-columns: repeat(3, max-content);
    place-items: center;
    grid-gap: 12px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        position: static;
        height: 16px;
        grid-gap: 7px;
    }
`;

export const RatingStarIcon = styled(StarIcon)`
    width: 24px;
    height: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 16px;
        height: 16px;
    }
`;

export const RatingNumber = styled.p`
    margin: 0;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 13px;
        line-height: 130%;
    }
`;