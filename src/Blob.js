import React, {useEffect} from 'react';
import {findOneUser} from "./utils/UsersUtils";

const Blob = () => {
    useEffect(async () => {
        const userResponse = await findOneUser('61cc22e212f513a15dda5fa8');
    }, [])
    return (
        <div>
            BLOB
        </div>
    );
};

export default Blob;