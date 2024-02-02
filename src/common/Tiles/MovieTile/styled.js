import styled from "styled-components";
import { ReactComponent as MissingPosterIcon } from "../../../images/missingMoviePoster.svg";
import { boxShadowColor } from "../../styled";

export const MovieTileContainer = styled.div`
  max-width: 324px;
  min-width: 250px;
  max-height: auto;
  min-height: 500px;
  height: 100%;
  padding: 16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.breakpoints.mobile};
  box-shadow: 0px 4px 12px 0px ${boxShadowColor};
  display: grid;
  grid-template-rows: repeat(2, max-content);

  @media (max-width: ${({ theme }) => theme.breakpoints.narrow}) {
    max-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    min-width: 288px;
    width: auto;
    height: 100%;
    min-height: 201px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 16px;
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  max-width: 292px;
  max-height: auto;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 114px;
    height: 169px;
  }
`;

export const MissingMoviePoster = styled.div`
  background-color: ${({ theme }) => theme.color.silver};
  max-width: 360px;
  max-height: auto;
  height: 100%;
  width: 100%;
  max-height: auto;
  display: grid;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 114px;
    height: 169px;
  }
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
