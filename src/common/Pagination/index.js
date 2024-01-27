import { usePagination } from "./usePagination";
import FirstPageButton from "./Buttons/FirstPageButton";
import PreviousPageButton from "./Buttons/PreviousPageButton";
import MiddlePanel from "./MiddlePanel";
import NextPageButton from "./Buttons/NextPageButton";
import LastPageButton from "./Buttons/LastPageButton";
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
          <FirstPageButton
            currentPage={currentPage}
            buttonFunction={goToFirstPage}
          />
          <PreviousPageButton
            currentPage={currentPage}
            buttonFunction={goToPreviousPage}
          />
        </PageButtonsContainer>
        <MiddlePanel
          currentPage={currentPage}
          totalPages={totalPages}
        />
        <PageButtonsContainer>
          <NextPageButton
            totalPages={totalPages}
            currentPage={currentPage}
            buttonFunction={goToNextPage}
          />
          <LastPageButton
            totalPages={totalPages}
            currentPage={currentPage}
            buttonFunction={goToLastPage}
          />
        </PageButtonsContainer>
      </PaginationContainer>
    )
  )
};

export default Pagination;