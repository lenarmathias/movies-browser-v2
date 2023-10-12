import { useDispatch } from "react-redux";
import { resetPage } from "../../paginationSlice";
import {
    PageVectorIcon,
    ButtonContent,
    MobileHide
} from "../../styled";
import { SmallTile } from "../../../styled";

const FirstPageButton = ({ currentPage }) => {
    const dispatch = useDispatch();

    const goToFirstPage = () => {
        if (currentPage !== 1) {
            dispatch(resetPage());
        }
    };

    return (
        <SmallTile
            onClick={goToFirstPage}
            $pageButton
            as="button"
            disabled={currentPage === 1}
        >
            <ButtonContent>
                <PageVectorIcon $previousPage />
                <PageVectorIcon $previousPage $mobileOnly />
                <MobileHide>First</MobileHide>
            </ButtonContent>
        </SmallTile>
    )
};

export default FirstPageButton;