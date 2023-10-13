import { useDispatch } from "react-redux";
import { changePage } from "../../paginationSlice";
import {
    PageVectorIcon,
    ButtonContent,
    MobileHide
} from "../../styled";
import { SmallTile } from "../../../styled";

const PreviousPageButton = ({ currentPage }) => {
    const dispatch = useDispatch();

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            dispatch(changePage({ payload: currentPage - 1 }));
        }
    };

    return (
        <SmallTile
            onClick={goToPreviousPage}
            $pageButton
            as="button"
            disabled={currentPage === 1}
        >
            <ButtonContent>
                <PageVectorIcon $previousPage />
                <MobileHide>Previous</MobileHide>
            </ButtonContent>
        </SmallTile>
    )
};

export default PreviousPageButton;