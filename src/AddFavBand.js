import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {getOneEvent} from "./utils/EventsUtils";
import {addToFavBand, findOneUser, UserbooksEvent} from "./utils/UsersUtils";
import {getOneBand} from "./utils/BandsUtils";

const AddFavBand = ({setConnectedUser, setIsLoggedIn}) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) ?? null;
    const history = useHistory();
    const {bandId} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(async () => {
        async function addBandToFav(id) {
            setIsLoading(true);
            //fetch the band to add as favBand via band's id received in params
            const bandToAddFav = await getOneBand(id);
            if (bandToAddFav === 'Error') {
                setIsLoading(false);
                alert('This band does not exist');
                history.push('/')
            } else {
                setIsLoading(true);
                const addingToFavBandResponse = await addToFavBand(bandToAddFav._id);
                if (addingToFavBandResponse === 'Error') {
                    setIsLoading(false);
                    alert('Add band to favs failed');
                    history.push('/')
                } else {
                    //Adding to favBand success
                    //Get the updated infos related to the current user
                    const updatedUser = await findOneUser(currentUser.user._id);
                    const userToStore = {
                        access_token: currentUser.access_token,
                        user: updatedUser
                    }
                    //Replace the currentUser in local storage by the updated one
                    localStorage.setItem('currentUser', JSON.stringify(userToStore));
                    setConnectedUser(userToStore);
                    // setIsLoggedIn(true);
                    setIsLoading(false);
                    alert('Band added to favBands with success');
                    history.push('/');
                }
            }
        };
        await addBandToFav(bandId);
    }, [bandId]);
    return (
       isLoading && <div>Loading..</div>
    );
};

export default AddFavBand;