import React, {useEffect, useState} from 'react';
import AdminOptions from "./components/AdminOptions";
import {Link, useHistory} from "react-router-dom";
import {getAllBands, deleteOneBand} from "./utils/BandsUtils";

const AdminBands = () => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [bandsList, setBandsList] = useState([]);
    //Fetch all genres
    useEffect(() => {
        setIsLoading(true)

        async function fetchAllBands() {
            const data = await getAllBands();
            if (data === 'Error') {
                setIsLoading(false)
                console.log('Failed to fetch bands list')
            } else {
                console.log(bandsList)
                setIsLoading(false);
                setBandsList(data);
            }
        }

        fetchAllBands();
    }, []);

    const handleDeleteBand = async (id) => {
        //TODO before deleting this band check if at least one event is linked to this band
        setIsLoading(true);
        const data = await deleteOneBand(id);
        if (data === 'Error') {
            setIsLoading(false);
            alert('Band deletion failed');
            history.push('/adminPage')
        } else {
            const newBandsList = bandsList.filter(band => {
                return band._id !== id
            });
            setBandsList(newBandsList);
            setIsLoading(false);
            alert('Band removed with success');
        }
    }
    return (
        <div>
            <AdminOptions/>
            <Link to='/band/create'>
                <button>Add Band</button>
            </Link>
            {isLoading ?
                <div>Loading...</div> :
                (<div>
                    {bandsList.map(band => {
                        return (
                            <div key={band._id}>
                                <p>band name: {band.name}</p>
                                <p>genre: {band.genre.name}</p>
                                <button>update</button>
                                <button onClick={() => {
                                    handleDeleteBand(band._id)
                                }}>delete
                                </button>
                                <hr/>
                            </div>
                        )
                    })}
                </div>)
            }
        </div>
    );
};

export default AdminBands;