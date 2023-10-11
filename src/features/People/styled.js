import styled from "styled-components";

export const PeopleList = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    justify-items: center;
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletWide}) {
        grid-template-columns: repeat(5, 1fr);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletMedium}) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.vga}) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 16px;
    }
`;