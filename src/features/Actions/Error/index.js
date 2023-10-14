import { SectionHeading } from "../../../common/styled";
import { Warning, Container, Info, Link } from "./styled";

const Error = () => (
  <>
    <Warning />
    <Container>
      <SectionHeading>
        Ooops! Something went wrong...
      </SectionHeading>
      <Info>
        Please check your network connection and try again
      </Info>
      <Link to="/movies">
          Back to home page
      </Link>
    </Container>
  </>
);

export default Error;