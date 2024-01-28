import LogoAndButtons from "./LogoAndButtons";
import Search from "./SearchBar";
import {
  NavigationBarContainer,
  NavigationBarWrapper,
} from "./styled";

const NavigationBar = () => (
  <NavigationBarContainer>
    <NavigationBarWrapper>
      <LogoAndButtons />
      <Search />
    </NavigationBarWrapper>
  </NavigationBarContainer >
);

export default NavigationBar;