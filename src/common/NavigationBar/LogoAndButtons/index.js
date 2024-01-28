import {
    NavigationButtonsWrapper,
    HeaderContainer,
    HeaderLogo,
    Heading,
    Navigation,
    NavigationItem,
    LogoNavigationLink,
    StyledNavigationLink
} from "./styled";

export const LogoAndButtons = () => (
    <NavigationButtonsWrapper>
        <HeaderContainer>
            <LogoNavigationLink
                to="/movies"
            >
                <HeaderLogo />
                <Heading>
                    Movies Browser
                </Heading>
            </LogoNavigationLink>
        </HeaderContainer>
        <Navigation>
            <NavigationItem>
                <StyledNavigationLink
                    to="/movies"
                >
                    Movies
                </StyledNavigationLink>
            </NavigationItem>
            <NavigationItem>
                <StyledNavigationLink
                    to="/people"
                >
                    People
                </StyledNavigationLink>
            </NavigationItem>
        </Navigation>
    </NavigationButtonsWrapper>
);

export default LogoAndButtons