import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    getPersonId,
    selectPersonId,
    resetPeopleDetails,
    selectDetailsStatus,
    selectPeopleDetails,
} from "./peopleDetailsSlice";
import PersonInfo from "./PersonInfo";
import { LayoutContainer } from "./styled";

const Profile = () => {
    const dispatch = useDispatch();
    const { personId } = useParams();

    const status = useSelector(selectDetailsStatus);
    const currentPersonId = useSelector(selectPersonId);
    const personDetails = useSelector(selectPeopleDetails);

    useEffect(() => {
        if (status !== "success") {
            dispatch(getPersonId(personId));
        }
    }, [dispatch, status, personId]);

    useEffect(() => {
        if (personId !== currentPersonId && currentPersonId !== 0) {
            dispatch(resetPeopleDetails());
        }
    }, [dispatch, personId, currentPersonId]);

    return (
        <LayoutContainer>
            <PersonInfo personDetails={personDetails} />
        </LayoutContainer>
    )
};

export default Profile