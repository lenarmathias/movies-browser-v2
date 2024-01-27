import { usePagination } from "./usePagination";
import PaginationButton from "./PaginationButton";
import MiddlePanel from "./MiddlePanel";
import {
  PaginationContainer,
  PageButtonsContainer,
} from "./styled";

const Pagination = ({
  totalPages,
  currentPage
}) => {
  const {
    goToFirstPage,
    goToPreviousPage,
    goToNextPage,
    goToLastPage
  } = usePagination({
    currentPage,
    totalPages
  });

  return (
    currentPage !== undefined && (
      <PaginationContainer>
        <PageButtonsContainer>
          <PaginationButton
            currentPage={currentPage}
            buttonFunction={goToFirstPage}
            backButtons
            boundryButton
            buttonText="First"
          />
          <PaginationButton
            currentPage={currentPage}
            buttonFunction={goToPreviousPage}
            backButtons
            buttonText="Previous"
          />
        </PageButtonsContainer>

        <MiddlePanel
          currentPage={currentPage}
          totalPages={totalPages}
        />

        <PageButtonsContainer>
          <PaginationButton
            totalPages={totalPages}
            currentPage={currentPage}
            buttonFunction={goToNextPage}
            forthButtons
            buttonText="Next"
          />
          <PaginationButton
            totalPages={totalPages}
            currentPage={currentPage}
            buttonFunction={goToLastPage}
            boundryButton
            forthButtons
            buttonText="Last"
          />
        </PageButtonsContainer>
      </PaginationContainer>
    )
  )
};

export default Pagination;