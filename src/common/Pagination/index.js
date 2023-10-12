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
}) => (
  currentPage !== undefined && (
    <PaginationContainer>
      <PageButtonsContainer>
        <FirstPageButton
          currentPage={currentPage}
        />
        <PreviousPageButton
          currentPage={currentPage}
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
        />
        <LastPageButton
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </PageButtonsContainer>
    </PaginationContainer>
  )
);

export default Pagination;