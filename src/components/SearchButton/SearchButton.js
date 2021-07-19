import React from "react";
import search_icon from "../../assets/search_icon.png";
import "./SearchButton.scss" ;

const SearchButton = () => {
    
  return (
    <button type="button" className="search-button" aria-label="buscar produto">
      <img
        alt="lupa de busca"
        className="search-icon"
        src={search_icon}
      />
    </button>
  );
};

export default SearchButton;