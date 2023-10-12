import { MiddleContainer } from "../styled";
import { SmallGreyText } from "../../styled";

const MiddlePanel = () => (
    <MiddleContainer>
        <SmallGreyText>Page</SmallGreyText>
        <SmallGreyText $boldBlackText>1</SmallGreyText>
        <SmallGreyText>of</SmallGreyText>
        <SmallGreyText $boldBlackText>500</SmallGreyText>
    </MiddleContainer>
);

export default MiddlePanel;