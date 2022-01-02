import React from 'react';
import {Redirect,Route} from "react-router-dom";


const AdminRoute = (props) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) ;
    const adminRole = currentUser.user.roles[0] === 'admin' && true;
    console.log('from adminRoute -> adminrole? ', adminRole);
    return  adminRole ? <Route {...props}/> : <Redirect to='/' />
};

export default AdminRoute;