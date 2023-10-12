import { Spinner } from "../styled";
import { SectionHeading } from "../../../common/styled";

const Loading = ({ query }) => (
  <>
    <SectionHeading>
      {query ? `Search results for "${query}"` : ""}
    </SectionHeading>
    <Spinner />
  </>
);

export default Loading;