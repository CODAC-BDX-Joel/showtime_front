import Home from "./Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import NotFound from "./NotFound";
import NavBar from "./components/NavBar";
import Logout from "./Logout";
import MyEvents from "./MyEvents";
import MyFavBands from "./MyFavBands";
import MyProfile from "./MyProfile";
import AdminPage from "./AdminPage";
import AdminStats from "./AdminStats";
import AdminUsers from "./AdminUsers";
import AdminEvents from "./AdminEvents";
import AdminBands from "./AdminBands";
import AdminGenres from "./AdminGenres";
import AddGenre from "./AddGenre";
import AddBand from "./AddBand";
import AddEvent from "./AddEvent";
import BookEvent from "./BookEvent";
import Blob from "./Blob";
import UserDetails from "./UserDetails";
import AddFavBand from "./AddFavBand";
import {useEffect, useState} from "react";
import AdminRoute from "./AdminRoute";

function App() {
    const [connectedUser, setConnectedUser] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        if (connectedUser) {
            setIsLoggedIn(true);
        }
    }, [])
    return (
        // <AuthContextProvider>
        <Router>
            <div className="App">
                <div className='content'>
                    <NavBar connectedUser={connectedUser} isLoggedIn={isLoggedIn} isAdmin={isAdmin}/>
                    <Switch>

                        <Route path='/login'>
                            <Login setConnectedUser={setConnectedUser} setIsLoggedIn={setIsLoggedIn}
                                   setIsAdmin={setIsAdmin}/>
                        </Route>
                        <Route path='/register'>
                            <Register/>
                        </Route>
                        <Route path='/logout'>
                            <Logout setConnectedUser={setConnectedUser} setIsLoggedIn={setIsLoggedIn}
                                    setIsAdmin={setIsAdmin}/>
                        </Route>
                        <Route path='/myEvents'>
                            <MyEvents/>
                        </Route>
                        <Route path='/myFavBands'>
                            <MyFavBands/>
                        </Route>
                        <Route path='/myProfile'>
                            <MyProfile/>
                        </Route>
                        <AdminRoute isAdmin={isAdmin} path='/blob' component={Blob}/>
                        <AdminRoute path='/adminPage' component={AdminPage}/>
                        <AdminRoute path='/adminStats' component={AdminStats}/>
                        <AdminRoute path='/adminUsers' component={AdminUsers}/>
                        <AdminRoute path='/userDetails/:userId' component={UserDetails}/>
                        <AdminRoute path='/adminEvents' component={AdminEvents}/>
                        <AdminRoute path='/event/create' component={AddEvent}/>
                        <AdminRoute path='/adminBands' component={AdminBands}/>
                        <AdminRoute path='/band/create' component={AddBand}/>
                        <AdminRoute path='/adminGenres' component={AdminGenres}/>
                        <AdminRoute path='/genre/create' component={AddGenre}/>
                        <Route path='/addFavBand/:bandId'>
                            <AddFavBand setConnectedUser={setConnectedUser} setIsLoggedIn={setIsLoggedIn}/>
                        </Route>
                        <Route path='/bookEvent/:eventId'>
                            <BookEvent setConnectedUser={setConnectedUser} setIsLoggedIn={setIsLoggedIn}/>
                        </Route>
                        <Route exact path='/'>
                            <Home connectedUser={connectedUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                        </Route>
                        <Route path='*'>
                            <NotFound/>
                        </Route>
                    </Switch>
                </div>

            </div>
        </Router>
        // </AuthContextProvider>
    )
        ;
}

export default App;
