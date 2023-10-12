import {
    PageVectorIcon,
    ButtonContent,
    MobileHide
} from "../../styled";
import { SmallTile } from "../../../styled";

const NextPageButton = () => (
    <SmallTile $pageButton as="button">
        <ButtonContent>
            <MobileHide>Next</MobileHide>
            <PageVectorIcon />
        </ButtonContent>
    </SmallTile>
);

export default NextPageButton;