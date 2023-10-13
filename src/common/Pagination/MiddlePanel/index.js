import { MiddleContainer } from "../styled";
import { SmallGreyText } from "../../styled";

const MiddlePanel = ({ currentPage, totalPages }) => (
    <MiddleContainer>
        <SmallGreyText>
            Page
        </SmallGreyText>
        <SmallGreyText $boldBlackText>
            {currentPage}
        </SmallGreyText>
        <SmallGreyText>
            of
        </SmallGreyText>
        <SmallGreyText $boldBlackText>
            {totalPages}
        </SmallGreyText>
    </MiddleContainer>
);

export default MiddlePanel;