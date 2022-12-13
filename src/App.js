import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponent from "./Navbar";
import HomeComponent from "./Home";
import ParkComponent from "./Park";
import NpsSearch from "./nps/Search/nps-search";
import NpsSearchResults from "./nps/Search/nps-search-results";
import AnonUserComponent from "./AnonProfile";
import Users from "./users";
import ProtectedRoute from "./users/protected-route";
import Login from "./users/login";
import Register from "./users/register";
import Profile from "./users/profile";
import CurrentUser from "./users/current-user";
import npsReducer from "./nps/nps-reducer";
import usersReducer from "./users/users-reducer";
import parksReducer from "./Park/parks-reducer";
import reviewsReducer from "./Review/reviews-reducer";
import anonUserReducer from "./AnonProfile/anon-user-reducer"

const store = configureStore({
  reducer:{
    users: usersReducer,
    nps: npsReducer,
    parks: parksReducer,
    reviews: reviewsReducer,
    anonUser: anonUserReducer
  }
});

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <CurrentUser>
            <NavbarComponent/>
            <Routes>
              <Route index element={<HomeComponent/>}/>
              <Route path="/search" element={<NpsSearch/>}/>
              <Route path="/users" element={
                <ProtectedRoute>
                  <Users/>
                </ProtectedRoute>
              }/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile/>
                </ProtectedRoute>
              }/>
              <Route path="/details/:park" element={<ParkComponent/>}/>
              <Route path="/profile/:username" element={<AnonUserComponent/>}/>
              <Route path="/search/:park" element={<NpsSearchResults/>}/>
            </Routes>
          </CurrentUser>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

