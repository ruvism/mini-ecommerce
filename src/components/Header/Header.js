import logo from "../../assets/logo.png";
import SearchBar from "../SearchBar/SearchBar"; 
import ShoppingCart from "../ShoppingCart/ShoppingCartButton";
import "./Header.scss";

const Header = () => {

  return (
    <div className="header">
      <div className="header__elements container">
        <figure className="header__elements--logo col-sm-9 col-2">
            <img
              alt="logo Centauro"
              className="header__logo"
              src={logo}
            />
        </figure>
        <div className="header__elements--search col-sm-12 col-8">
          <span className="header__search-button">
            <SearchBar />
          </span>
        </div>
        <div  className="header__elements--cart col-sm-3 col-2">
            <span className="header__shopping-cart">
                <ShoppingCart />
            </span>
        </div>
      </div>
    </div>
  );
};
  
export default Header;