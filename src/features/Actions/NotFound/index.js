import { Image, Wrapper } from "../styled";
import { SectionHeading } from "../../../common/styled";

const NotFound = ({ query }) => (
  <>
    <SectionHeading>
      {`Sorry, there are no results for "${query}"`}
    </SectionHeading>
    <Wrapper>
      <Image />
    </Wrapper>
  </>
);

export default NotFound;