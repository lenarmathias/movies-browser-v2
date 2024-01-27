import {
    PageVectorIcon,
    ButtonContent,
    MobileHide
} from "../../styled";
import { SmallTile } from "../../../styled";

const FirstPageButton = ({
    currentPage,
    buttonFunction
}) => (
    <SmallTile
        onClick={buttonFunction}
        $pageButton
        as="button"
        disabled={currentPage === 1}
    >
        <ButtonContent>
            <PageVectorIcon $previousPage />
            <PageVectorIcon $previousPage $mobileOnly />
            <MobileHide>First</MobileHide>
        </ButtonContent>
    </SmallTile>
);

export default FirstPageButton;