import SearchComponent from "./Search";
import LoginComponent from "./Login";
import NavbarComponent from "./Navbar";
import ProfileComponent from "./Profile";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <NavbarComponent/>
      <div className="m-0 p-0">
        <Routes>
          <Route path="/search" element={<SearchComponent/>}/>
          <Route path="/login" element={<LoginComponent/>}/>
          <Route path="/profile" element={<ProfileComponent/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
