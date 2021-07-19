import SearchButton from "../SearchButton/SearchButton";
import "./SearchBar.scss";

const SearchBar = () => {
    
  return (
    <div className="search__bar container">
      <input
        type="text"
        placeholder="Busque por produtos, esportes, marcas ou times"
        className="search__input"
      />
      <SearchButton />
    </div>
  );
};
  
export default SearchBar;