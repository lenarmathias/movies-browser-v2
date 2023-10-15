import { nanoid } from "@reduxjs/toolkit";
import PeopleTile from "../../../common/Tiles/PeopleTile";
import { PeopleList } from "../../People/styled";
import { SectionHeading } from "../../../common/styled";

const MoviePeople = ({ title, moviePeople }) => (
  <>
    <SectionHeading>
      {title}
    </SectionHeading>
    <PeopleList>
      {moviePeople.map((person) => (
        <PeopleTile
          key={nanoid()}
          person={person}
        />
      ))}
    </PeopleList>
  </>
);

export default MoviePeople;