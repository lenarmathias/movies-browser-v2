import { useDispatch } from "react-redux";
import { changePage } from "../../paginationSlice";
import {
    PageVectorIcon,
    ButtonContent,
    MobileHide
} from "../../styled";
import { SmallTile } from "../../../styled";

const NextPageButton = ({
    totalPages,
    currentPage
}) => {
    const dispatch = useDispatch();

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            dispatch(changePage({ payload: currentPage + 1 }));
        }
    };

    return (
        <SmallTile
            onClick={goToNextPage}
            $pageButton
            as="button"
            disabled={currentPage === totalPages}
        >
            <ButtonContent>
                <MobileHide>Next</MobileHide>
                <PageVectorIcon />
            </ButtonContent>
        </SmallTile>
    )
};

export default NextPageButton;