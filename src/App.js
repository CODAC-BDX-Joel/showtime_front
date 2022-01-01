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

function App() {
    return (
        // <AuthContextProvider>
            <Router>
                <div className="App">
                    <div className='content'>
                        <NavBar/>
                        <Switch>
                            <Route path='/login'>
                                <Login/>

                            </Route>
                            <Route path='/register'>
                                <Register/>
                            </Route>
                            <Route path='/logout'>
                                <Logout/>
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
                            <Route path='/adminPage'>
                                <AdminPage/>
                            </Route>
                            <Route path='/adminStats'>
                                <AdminStats/>
                            </Route>
                            <Route path='/adminUsers'>
                                <AdminUsers/>
                            </Route>
                            <Route path='/userDetails/:userId'>
                                <UserDetails/>
                            </Route>
                            <Route path='/adminEvents'>
                                <AdminEvents/>
                            </Route>
                            <Route path='/event/create'>
                                <AddEvent/>
                            </Route>
                            <Route path='/adminBands'>
                                <AdminBands/>
                            </Route>
                            <Route path='/band/create'>
                                <AddBand/>
                            </Route>
                            <Route path='/adminGenres'>
                                <AdminGenres/>
                            </Route>
                            <Route path='/genre/create'>
                                <AddGenre/>
                            </Route>
                            <Route path='/bookEvent/:eventId'>
                                <BookEvent/>
                            </Route>
                            <Route path='/test'>
                               <Blob/>
                            </Route>
                            <Route exact path='/'>
                                <Home/>
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
