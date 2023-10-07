import styled from "styled-components";
import background from "../../images/poster.svg";

export const MovieDetailsContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

export const MovieDetailsSection = styled.div`
  width: 1368px;
  height: 769px;
  margin: auto;
  background: linear-gradient(
      189.44deg,
      rgba(0, 0, 0, 0) 58.48%,
      rgba(0, 0, 0, 0.106473) 63.17%,
      rgba(0, 0, 0, 0.235359) 68.85%,
      rgba(0, 0, 0, 0.492821) 78.08%,
      rgba(0, 0, 0, 0.740286) 85.86%,
      #000000 92.87%
    ),
    linear-gradient(
      270deg,
      #000000 14.11%,
      rgba(0, 0, 0, 0.873268) 15.08%,
      rgba(0, 0, 0, 0.720529) 16.51%,
      rgba(0, 0, 0, 0.294577) 19.99%,
      rgba(0, 0, 0, 0.159921) 21.88%,
      rgba(0, 0, 0, 0) 25.68%
    ),
    linear-gradient(
      90deg,
      #000000 13.6%,
      rgba(0, 0, 0, 0.984059) 14.58%,
      rgba(0, 0, 0, 0.967732) 15.44%,
      rgba(0, 0, 0, 0.865569) 16.3%,
      rgba(0, 0, 0, 0.230315) 22.87%,
      rgba(0, 0, 0, 0) 26.64%
    ),
    linear-gradient(
      180deg,
      #000000 0%,
      rgba(0, 0, 0, 0.689555) 4.66%,
      rgba(0, 0, 0, 0.439033) 9.34%,
      rgba(0, 0, 0, 0.20628) 15.16%,
      rgba(0, 0, 0, 0) 24.22%
    ),
    url(${background});
  background-size: cover, cover, cover, cover, 1368px 769px;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
`;

export const MovieDetailsDiv = styled.div`
  margin-top: auto;
  font-family: Poppins;
`;

export const MovieDetailsTittle = styled.h2`
  color: ${({ theme }) => theme.color.white};
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-bottom: 24px;
`;

export const MovieDetailsRatingDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 126px;
  margin: 0;
`;

export const MovieDetailsRatingStar = styled.div`
  display: grid;
  align-items: center;
  margin-right: 8px;
`;

export const MovieDetailsRate = styled.p`
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  color: ${({ theme }) => theme.color.white};
  margin-right: 7px;
`;

export const MovieDetailsRateScale = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  color: ${({ theme }) => theme.color.white};
  display: grid;
  align-items: center;
`;

export const MovieDetailsRatesNumber = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  color: ${({ theme }) => theme.color.white};
`;

export const MovieDetailsTileDiv = styled.div`
  display: grid;
  grid-template-columns: auto;
`;

export const MovieDetailsTileTittle = styled.p`
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  color: ${({ theme }) => theme.color.black};
`;

export const MovieDetailsCharacter = styled.p`
  margin: 8px auto 0px auto;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: ${({ theme }) => theme.color.darkerGrey};
`;