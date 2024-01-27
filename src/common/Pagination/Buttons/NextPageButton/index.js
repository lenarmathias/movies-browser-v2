import {
    PageVectorIcon,
    ButtonContent,
    MobileHide
} from "../../styled";
import { SmallTile } from "../../../styled";

const NextPageButton = ({
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
            <MobileHide>Next</MobileHide>
            <PageVectorIcon />
        </ButtonContent>
    </SmallTile>
);

export default NextPageButton;