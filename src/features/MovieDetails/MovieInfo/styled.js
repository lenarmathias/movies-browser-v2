import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "poster info"
    "poster description";
  border-radius: 5px;
  gap: 20px;
  margin-top: 64px;
  padding: 40px;
  background-color: ${({ theme }) => theme.color.white};
  justify-content: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    grid-template-areas:
      "poster info"
      "description description";
    grid-template-columns: auto 1fr;
    padding: 16px;
    margin-top: 16px;
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: auto;
  max-width: 312px;
  border-radius: 5px;
  grid-area: poster;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 114px;
    height: 169px;
  }
`;

export const Info = styled.div`
  grid-area: info;
`;

export const Description = styled.div`
  grid-area: description;
  font-style: normal;
  line-height: 160%;
  font-size: 20px;
  font-weight: 400px;
  margin-top: -40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    margin-top: 0px;
    font-size: 14px;
  }
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const Year = styled.div`
  font-size: 22px;
  font-weight: 400;
  margin-top: 24px;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 13px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.darkerGrey};
    margin-top: 4px;
    margin-bottom: 8px;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductionSpan = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.stormGrey};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    display: none;
  }
`;

export const Countries = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.black};
  display: inline-block;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 12px;
    font-weight: 400;
  }
`;

export const ReleaseSpan = styled(ProductionSpan)`
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const Release = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 12px;
    font-weight: 400;
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;

export const GenresContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;

export const SmallTile = styled.div`
  height: 36px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.colorDivider};

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 10px;
    font-weight: 400;
    padding: 4px 8px;
    height: auto;
  }
`;