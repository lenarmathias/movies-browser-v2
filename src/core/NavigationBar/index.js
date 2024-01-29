import LogoAndButtons from "./LogoAndButtons";
import SearchBar from "./SearchBar";
import {
  NavigationBarContainer,
  NavigationBarWrapper,
} from "./styled";

const NavigationBar = () => (
  <NavigationBarContainer>
    <NavigationBarWrapper>
      <LogoAndButtons />
      <SearchBar />
    </NavigationBarWrapper>
  </NavigationBarContainer >
);

export default NavigationBar;