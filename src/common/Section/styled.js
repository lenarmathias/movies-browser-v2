import styled from "styled-components";

export const SectionHeading = styled.h2`
    margin-bottom: 24px;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;

    @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        margin-bottom: 12px;
        font-size: 18px;
    }
`;

export const BottomContainer = styled.div`
    margin-top: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        margin-top: 32px;
    }
`;