import {
    PageVectorIcon,
    ButtonContent,
    MobileHide
} from "./styled";
import { SmallTile } from "../../styled";

const PaginationButton = ({
    totalPages,
    currentPage,
    buttonFunction,
    buttonText,
    backButtons,
    forthButtons,
    boundryButton
}) => (
    <SmallTile
        onClick={buttonFunction}
        $pageButton
        as="button"
        disabled={(backButtons && currentPage === 1) || (forthButtons && currentPage === totalPages)}
    >
        <ButtonContent>
            {backButtons
                ? (
                    <>
                        <PageVectorIcon $previousPage />
                        {boundryButton && (
                            <PageVectorIcon
                                $previousPage
                                $mobileOnly
                            />
                        )}
                        <MobileHide>{buttonText}</MobileHide>
                    </>
                ) : (
                    <>
                        <MobileHide>{buttonText}</MobileHide>
                        {boundryButton && (
                            <PageVectorIcon
                                $mobileOnly
                            />
                        )}
                        <PageVectorIcon />
                    </>
                )
            }
        </ButtonContent>
    </SmallTile >
);

export default PaginationButton;