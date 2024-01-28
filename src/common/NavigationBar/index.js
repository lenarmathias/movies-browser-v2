import LogoAndButtons from "./LogoAndButtons";
import Search from "./Search";
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