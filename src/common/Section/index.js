import { SectionHeading } from "../styled";

const Section = ({ title, content }) => (
    <>
        <SectionHeading>
            {title}
        </SectionHeading>
        {content}
    </>
);

export default Section;