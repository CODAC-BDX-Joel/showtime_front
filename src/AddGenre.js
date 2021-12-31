import React, {useState} from 'react';
import {createGenre} from "./utils/GenresUtils";
import {useHistory} from "react-router-dom";

const AddGenre = () => {
    const history = useHistory();
    const [genreName, setGenreName] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await createGenre({name: genreName})
        if (response === 'Error') {
            alert('Genre creation failed');
        } else {
            history.push('/adminGenres')
            alert('Genre created with success')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Genre name</label>
                <input onChange={(e) => {
                    setGenreName(e.target.value)
                }} type='text' required minLength='3' value={genreName}/>
                <button>Create genre</button>
            </form>
        </div>
    );
};

export default AddGenre;