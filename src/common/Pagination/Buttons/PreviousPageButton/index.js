import {
    PageVectorIcon,
    ButtonContent,
    MobileHide
} from "../../styled";
import { SmallTile } from "../../../styled";

const PreviousPageButton = () => (
    <SmallTile $pageButton as="button" disabled>
        <ButtonContent>
            <PageVectorIcon $previousPage />
            <MobileHide>Previous</MobileHide>
        </ButtonContent>
    </SmallTile>
);

export default PreviousPageButton;