import styled from "styled-components";

export const NavigationBarContainer = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  width: 100vw;
  min-height: 94px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: grid;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 142px;
    place-items: center;
  }
`;

export const NavigationBarWrapper = styled.div`
  margin: 23px auto;
  min-width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 24px auto 16px;
    max-width: 100%;
    width: auto;
    justify-content: flex-start;
    flex-direction: column;
    gap: 24px;
  }
`;