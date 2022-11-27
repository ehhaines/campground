import React from "react";
import SearchBar from "../SearchBar";
import chooseBackground from "../background";
import "./searchbar.css";

const SearchComponent = () => {
  const currentBackground = chooseBackground();
  return(
    <div className="eh-center w-100 eh-background" style={{
      backgroundImage: `url("/images/${currentBackground.image}")`
    }}>
      <div className='w-50'>
        <SearchBar/>
      </div>
      <div className="fixed-bottom mb-3 ms-3 p-2 fs-6 bg-warning eh-trim rounded">
        {currentBackground.park}
      </div>
    </div>
  );
}

export default SearchComponent;