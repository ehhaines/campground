import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import SearchComponent from "./Search";
import LoginComponent from "./Login";
import NavbarComponent from "./Navbar";
import ProfileComponent from "./Profile";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import "./App.css";
import npsReducer from "./nps/nps-reducer";

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
        <div className="m-0 p-0" style={{"position": "relative"}} >
          <Routes>
            <Route path="/search" element={<SearchComponent/>}/>
            <Route path="/login" element={<LoginComponent/>}/>
            <Route path="/profile" element={<ProfileComponent/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
