import React from "react";
// import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import LoginComponent from "./Login";
import NavbarComponent from "./Navbar";
import ProfileComponent from "./Profile";
import OthersComponent from "./Profile/others";
import EditProfile from "./edit-profile";
import NpsSearch from "./nps/Search/nps-search";
// import npsReducer from "./nps/nps-reducer";
// import usersReducer from "./Profile/users-reducer";
// import profileReducer from "./reducers/profile-reducer";
import {store} from "./store";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import "./App.css";
import HomeComponent from "./Home";
import ParkComponent from "./Park";
// import parksReducer from "./Park/parks-reducer";
// import reviewsReducer from "./Review/reviews-reducer";
import NpsSearchResults from "./nps/Search/nps-search-results";
import CurrentUser from "./Profile/current-user";
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";


// const store = configureStore({
//   reducer: {
//     nps: npsReducer,
//     parks: parksReducer,
//     users: usersReducer,
//     profile: profileReducer,
//     reviews: reviewsReducer
//   }
// })

let persistor = persistStore(store);

function App() {
  return (
     <Provider store={store} >
      {/* <BrowserRouter>
        <NavbarComponent/>
        <div className="m-0 p-0">
          <Routes>
            <Route path="/*" element={<HomeComponent/>}/>
            <Route path="/search" element={<NpsSearch/>}/>
            <Route path="/search/:park" element={<NpsSearchResults/>}/>
            <Route path="/details/:park" element={<ParkComponent/>}/>
            <Route path="/login" element={<LoginComponent/>}/>
            <Route path="/profile" element={<ProfileComponent/>}/>
            <Route path="/edit-profile" element={<EditProfile/>}/>
          </Routes>
        </div>
      </BrowserRouter> */}
      <PersistGate loading={null} persistor={persistor}>

          <BrowserRouter>
            <NavbarComponent/>
            <div className="m-0 p-0">
              <Routes>
                <Route path="/*" element={<HomeComponent/>}/>
                <Route path="/search" element={<NpsSearch/>}/>
                <Route path="/search/:park" element={<NpsSearchResults/>}/>
                <Route path="/details/:park" element={<ParkComponent/>}/>
                <Route path="/login" element={<LoginComponent/>}/>
                <Route path="/profile" element={<ProfileComponent/>}/>
                <Route path="/edit-profile" element={<EditProfile/>}/>
                <Route path="/others" element={<OthersComponent/>}/>
              </Routes>
            </div>
          </BrowserRouter>

      </PersistGate>
    </Provider>
  );
}

export default App;
