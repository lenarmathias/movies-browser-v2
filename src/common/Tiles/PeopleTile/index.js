import { imageUrl } from "../../imageUrl";
import {
  PeopleTileContainer,
  PeopleTilePhoto,
  PeopleTileName,
  MissingProfilePhoto,
  MissingProfilePhotoIcon,
} from "./styled";
import { SmallGreyText, ContentLink } from "../../styled";

const PeopleTile = ({ person }) => (
  <PeopleTileContainer>
    <ContentLink to={`/people/${person.id}`}>
      {person.profile_path ? (
        <PeopleTilePhoto
          src={imageUrl + person.profile_path}
          alt="Profile Photo"
        />
      ) : (
        <MissingProfilePhoto as="div">
          <MissingProfilePhotoIcon />
        </MissingProfilePhoto>
      )}
      <PeopleTileName>{person.name}</PeopleTileName>
      {(person.character || person.job) && (
        <SmallGreyText $roleOrJob>
          {person.character} {person.job}
        </SmallGreyText>
      )}
    </ContentLink>
  </PeopleTileContainer>
);

export default PeopleTile;