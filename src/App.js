import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import LoginComponent from "./Login";
import NavbarComponent from "./Navbar";
import ProfileComponent from "./Profile";
import NpsSearch from "./nps/nps-search";
import npsReducer from "./nps/nps-reducer";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import "./App.css";

const store = configureStore({
  reducer: {
    nps: npsReducer
  }
})

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavbarComponent/>
        <div className="m-0 p-0">
          <Routes>
            <Route path="/search" element={<NpsSearch/>}/>
            <Route path="/login" element={<LoginComponent/>}/>
            <Route path="/profile" element={<ProfileComponent/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
