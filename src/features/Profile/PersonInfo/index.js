import { imageUrl } from "../../../common/imageUrl";
import {
    BigTile,
    ProfilePhoto,
    SubSectionTitle,
    GridContainer,
    FlexBoxContainer,
    BiographyText
} from "./styled";
import { SmallGreyText } from "../../../common/styled";
import {
    MissingProfilePhoto,
    MissingProfilePhotoIcon
} from "../../../common/Tiles/PeopleTile/styled";

const PersonInfo = ({
    personPhotoPath,
    personName,
    personBirthday,
    formatDate,
    personPlaceOfBirth,
    personBiography
}) => (
    <BigTile>
        <GridContainer>
            {personPhotoPath ? (
                <ProfilePhoto
                    src={imageUrl + personPhotoPath}
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
                        {
                            personBirthday
                                ? formatDate(personBirthday)
                                : "Uknown"
                        }
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
);

export default PersonInfo;