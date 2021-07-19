import shopping_cart from "../../assets/shopping_cart.png";

import "./ShoppingCart.scss";

const ShoppingCartButton = () => {

  return (
    <button type="button" aria-label="carrinho" className="shopping-cart">
      <img
      alt="carrinho"
      className="navbar__logo"
      src={shopping_cart}
      />
    </button>
  );
};

export default ShoppingCartButton;