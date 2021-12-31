import React, {useEffect, useState} from 'react';
import {getAllGenres} from "./utils/GenresUtils";
import {createBand} from "./utils/BandsUtils";
import {useHistory} from "react-router-dom";

const AddBand = () => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false)
    const [bandName, setBandName] = useState('');
    const [bandGenre, setBandGenre] = useState('');
    const [genresList, setGenresList] = useState([]);
    const handleName = (e) => {
        setBandName(e.target.value)
    }
    const handleGenre = (e) => {
        setBandGenre(e.target.value)
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const newBand = {name: bandName, genre: bandGenre}
        const response = await createBand(newBand);
        if (response === 'Error') {
            setIsLoading(false);
            alert('Band creation failed');
        } else {
            setIsLoading(false);
            console.log('band created', response);
            alert('New band created with success');
            history.push('/adminBands');
            //redirect to page listing bands list
        }
    };

    useEffect(() => {

        setIsLoading(true)

        async function fetchAllGenres() {
            const data = await getAllGenres()
            if (data === 'Error') {
                setIsLoading(false)
                console.log('Failed to fetch genres list')
            } else {
                setIsLoading(false)
                setGenresList(data)
            }
        }

        fetchAllGenres();

    }, []);


    return (
        isLoading ? <div>Loading...</div> : (<div>
            <form onSubmit={handleSubmit}>
                <label>Band name</label>
                <input onChange={handleName} value={bandName} type='text' minLength='2' required/>
                <label>Genre</label>
                <select onChange={handleGenre} required>
                    <option value="">--Genre--</option>
                    {genresList.map(genre => {
                        return (
                            <option onChange={handleGenre} key={genre._id} value={genre._id}>{genre.name}</option>
                        )
                    })}
                </select>
                <button>Create band</button>
            </form>
        </div>)
    );
};

export default AddBand;


