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
`;

export const Poster = styled.img`
  max-width: 312px;
  max-height: 464px;
  border-radius: 5px;
  grid-area: poster;
`;

export const Info = styled.div`
  grid-area: info;
`;

export const Description = styled.div`
  grid-area: description;
  font-size: 20px;
  font-weight: 400px;
  margin-top: -40px;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
`;

export const Year = styled.div`
  font-size: 22px;
  font-weight: 400;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const ProductionDiv = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.stormGrey};
`;

export const Countries = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.black};
`;

export const ReleaseDiv = styled(ProductionDiv)`
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const Release = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.black};
`;

export const GenresContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const SmallTile = styled.div`
  height: 36px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.colorDivider};
`;
