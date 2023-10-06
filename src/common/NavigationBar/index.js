import { useLocation } from "react-router-dom";
import {
  NavigationBarContainer,
  NavigationBarWrapper,
  NavigationButtonsWrapper,
  HeaderContainer,
  HeaderLogo,
  Heading,
  Navigation,
  NavigationItem,
  LogoNavigationLink,
  StyledNavigationLink,
  SearchContainer,
  SearchIcon,
  SearchInput,
} from "./styled";

const NavigationBar = () => {
  const location = useLocation();

  return (
    <NavigationBarContainer>
      <NavigationBarWrapper>
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
        <SearchContainer>
          <SearchIcon />
          <SearchInput
            placeholder={
              `Search for ${location.pathname === "/movies"
                ? "movies..."
                : "people..."}
              `
            }
          />
        </SearchContainer>
      </NavigationBarWrapper>
    </NavigationBarContainer>
  )
};

export default NavigationBar;