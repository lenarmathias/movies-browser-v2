import { useDispatch } from "react-redux";
import { changePage } from "../../paginationSlice";
import {
    PageVectorIcon,
    ButtonContent,
    MobileHide
} from "../../styled";
import { SmallTile } from "../../../styled";

const LastPageButton = ({
    totalPages,
    currentPage
}) => {
    const dispatch = useDispatch();

    const goToLastPage = () => {
        if (currentPage !== totalPages) {
            dispatch(changePage({ payload: totalPages }));
        }
    };

    return (
        <SmallTile
            onClick={goToLastPage}
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
    )
};

export default LastPageButton;