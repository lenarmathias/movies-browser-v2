import {
    PageVectorIcon,
    ButtonContent,
    MobileHide
  } from "../../styled";
import { SmallTile } from "../../../styled";

const FirstPageButton = () => (
    <SmallTile $pageButton as="button" disabled>
        <ButtonContent>
            <PageVectorIcon $previousPage />
            <PageVectorIcon $previousPage $mobileOnly />
            <MobileHide>First</MobileHide>
        </ButtonContent>
    </SmallTile>
);

export default FirstPageButton;