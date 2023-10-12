import {
    PageVectorIcon,
    ButtonContent,
    MobileHide
} from "../../styled";
import { SmallTile } from "../../../styled";

const LastPageButton = () => (
    <SmallTile $pageButton as="button">
        <ButtonContent>
            <MobileHide>Last</MobileHide>
            <PageVectorIcon $mobileOnly />
            <PageVectorIcon />
        </ButtonContent>
    </SmallTile>
);

export default LastPageButton;