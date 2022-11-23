import React from "react";

const SearchBar = () => {
  return(
    <form>
      <div className="form-group">
        <input type="text" className="form-control form-control-lg" placeholder="Search for a national park"/>
      </div>
    </form>
  );
}

export default SearchBar;