import "./ShoppingCartEmpty.scss";
import cart from "../../assets/empty-cart.png";

const ShoppingCartEmpty = () => {

    return(
        <div className="shopping-cart-empty container">
            <figure className="shopping-cart-empty__logo">
                <img
                  alt="carrinho vazio"
                  src={cart}
                />
            </figure>
            <div className="shopping-cart-empty__info">
                <h3>Seu carrinho está vazio...</h3>
                <p className="shopping-cart-empty__info-text">
                    São milhares de produtos para você escolher. <br />
                    Escolha seus produtos e adicione em seu carrinho.
                </p>
                <button className="shopping-cart-empty__info-button">
                    Comece a comprar
                </button>
            </div>
        </div>
    );
};

export default ShoppingCartEmpty;
