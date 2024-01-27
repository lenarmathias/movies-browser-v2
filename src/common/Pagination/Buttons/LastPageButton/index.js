import {
    PageVectorIcon,
    ButtonContent,
    MobileHide
} from "../../styled";
import { SmallTile } from "../../../styled";

const LastPageButton = ({
    totalPages,
    currentPage,
    buttonFunction
}) => (
    <SmallTile
        onClick={buttonFunction}
        $pageButton
        as="button"
        disabled={currentPage === totalPages}
    >
        <ButtonContent>
            <MobileHide>Last</MobileHide>
            <PageVectorIcon $mobileOnly />
            <PageVectorIcon />
        </ButtonContent>
    </SmallTile>
);

export default LastPageButton;