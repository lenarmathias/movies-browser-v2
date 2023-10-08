import {
    BigTile,
    ProfilePhoto,
    SubSectionTitle,
    GridContainer,
    FlexBoxContainer,
    BiographyText
} from "./styled";
import {
    MissingProfilePhoto,
    MissingProfilePhotoIcon,
    SmallGreyText
} from "../../../common/styled";

const PersonInfo = ({ personDetails }) => {
    const personName = personDetails.name;
    const personPhotoPath = personDetails.profile_path;
    const personBirthday = personDetails.birthday;
    const personPlaceOfBirth = personDetails.place_of_birth;
    const personBiography = personDetails.biography;

    const photoUrl = "https://image.tmdb.org/t/p/original";

    return (
        <BigTile>
            <GridContainer>
                {personPhotoPath ? (
                    <ProfilePhoto
                        src={photoUrl + personPhotoPath}
                        alt="Person Photo"
                    />
                ) : (
                    <MissingProfilePhoto
                        as="div"
                        $portfolioPhoto
                    >
                        <MissingProfilePhotoIcon />
                    </MissingProfilePhoto>
                )}
            </GridContainer>
            <FlexBoxContainer>
                <SubSectionTitle>
                    {personName}
                </SubSectionTitle>
                <FlexBoxContainer $smallGap>
                    <FlexBoxContainer $rowDirection>
                        <SmallGreyText $portfolioText>
                            Date of birth:
                        </SmallGreyText>
                        <SmallGreyText $portfolioTextBlack>
                            {personBirthday}
                        </SmallGreyText>
                    </FlexBoxContainer>

                    <FlexBoxContainer $rowDirection>
                        <SmallGreyText $portfolioText>
                            Place of birth:
                        </SmallGreyText>
                        <SmallGreyText $portfolioTextBlack>
                            {personPlaceOfBirth}
                        </SmallGreyText>
                    </FlexBoxContainer>
                </FlexBoxContainer>
            </FlexBoxContainer>
            <BiographyText>
                {personBiography}
            </BiographyText>
        </BigTile>
    )
};

export default PersonInfo;