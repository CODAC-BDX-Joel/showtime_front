import React, {useEffect, useState} from 'react';
import AdminOptions from "./components/AdminOptions";
import {Link, useHistory} from "react-router-dom";
import {deleteOneGenre, getAllGenres} from "./utils/GenresUtils";

const AdminGenres = () => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [genresList, setGenresList] = useState([]);
    //Fetch all genres
    useEffect(() => {
        setIsLoading(true)

        async function fetchAllGenres() {
            const data = await getAllGenres()
            if (data === 'Error') {
                setIsLoading(false)
                console.log('Failed to fetch genres list')
            } else {
                setIsLoading(false);
                setGenresList(data);
            }
        }

        fetchAllGenres();
    }, []);

    //handle delete
    const handleDeleteGenre = async (id) => {
        //TODO before deleting this genre check if at least one band is linked to this genre
        setIsLoading(true)
        const data = await deleteOneGenre(id);
        if (data === 'Error') {
            setIsLoading(false);
            history.push('/adminGenres')
            alert('Genre deletion failed')
        } else {
            const newGenresList = genresList.filter(genre => {
                return genre._id !== id
            });
            setGenresList(newGenresList)
            setIsLoading(false);
            alert('Genre removed with success')
        }
        // console.log('deleting genre...', id)
    }
    return (
        <div>
            <AdminOptions/>
            <Link to='/genre/create'>
                <button>Add Genre</button>
            </Link>
            {isLoading ?
                <div>Loading...</div> :
                (<div>
                    {genresList.map(genre => {
                        return (
                            <div key={genre._id}>
                                <p>{genre.name}</p>
                                <button>update</button>
                                <button onClick={() => handleDeleteGenre(genre._id)}>delete</button>
                                <hr/>
                            </div>
                        )
                    })}
                </div>)
            }

        </div>
    );
};

export default AdminGenres;