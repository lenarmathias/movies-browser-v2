import FirstPageButton from "./Buttons/FirstPageButton";
import PreviousPageButton from "./Buttons/PreviousPageButton";
import MiddlePanel from "./MiddlePanel";
import NextPageButton from "./Buttons/NextPageButton";
import LastPageButton from "./Buttons/LastPageButton";
import {
  PaginationContainer,
  PageButtonsContainer,
} from "./styled";

const Pagination = () => {
  return (
    <PaginationContainer>
      <PageButtonsContainer>
        <FirstPageButton />
        <PreviousPageButton />
      </PageButtonsContainer>
      <MiddlePanel />
      <PageButtonsContainer>
        <NextPageButton />
        <LastPageButton />
      </PageButtonsContainer>
    </PaginationContainer>
  );
};

export default Pagination;
