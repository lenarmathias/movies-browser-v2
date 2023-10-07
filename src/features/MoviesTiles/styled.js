import styled from "styled-components";
import { ReactComponent as MissingPosterIcon } from "../../images/missingMoviePoster.svg";
import { ReactComponent as StarIcon } from "../../images/shape-star.svg";

const boxShadowColor = ({ theme }) => theme.color.boxShadow;

export const MoviesTilesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletWide}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.narrow}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;

export const MovieTile = styled.div`
  max-width: 324px;
  min-width: 250px;
  max-height: auto;
  min-height: 500px;
  height: auto;
  padding: 16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.breakpoints.mobile};
  box-shadow: 0px 4px 12px 0px ${boxShadowColor};
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.narrow}) {
    max-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    min-width: 288px;
    width: auto;
    min-height: auto;
    height: 201px;
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-gap: 16px;
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  max-width: 292px;
  max-height: auto;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.narrow}) {
    max-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 114px;
    height: 169px;
  }
`;

export const MissingMoviePoster = styled(MoviePoster)`
  background-color: ${({ theme }) => theme.color.silver};
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const MissingMoviePosterIcon = styled(MissingPosterIcon)`
  width: 120px;
  height: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 48px;
    height: 48px;
  }
`;

export const SeparateFlexContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    display: block;
  }
`;

export const MovieInfoContainer = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-rows: repeat(3, max-content);
  grid-gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
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

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 16px;
  }
`;

export const GenresContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

export const RatingContainer = styled.div`
  height: 24px;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  place-items: center;
  grid-gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    margin-top: 12px;
    height: 16px;
    grid-gap: 7px;
  }
`;

export const RatingStarIcon = styled(StarIcon)`
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
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
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 13px;
    line-height: 130%;
  }
`;