import {
    PageVectorIcon,
    ButtonContent,
    MobileHide
} from "../../styled";
import { SmallTile } from "../../../styled";

const PreviousPageButton = ({
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
            <MobileHide>Previous</MobileHide>
        </ButtonContent>
    </SmallTile>
);

export default PreviousPageButton;