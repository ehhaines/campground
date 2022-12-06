import SearchComponent from "./Search";
import LoginComponent from "./Login";
import NavbarComponent from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <NavbarComponent/>
      <div className="m-0 p-0">
        <Routes>
          <Route path="/*" element={<SearchComponent/>}/>
          <Route path="/login" element={<LoginComponent/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
