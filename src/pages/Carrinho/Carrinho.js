import './Carrinho.scss';
import ShoppingCartEmpty  from '../../components/ShoppingCart/ShoppingCartEmpty.js';
// import ShoppingCart  from '../../components/ShoppingCart/ShoppingCart.js';

//To Do: rotas para mudar o conte�do do carrinho dinamicamente e todo a l�gica do carrinho quando tiver produtos

function Carrinho() {
  return (
    <div className="shopping-cart">
        <ShoppingCartEmpty  />
        {/* <ShoppingCart /> */}
    </div>
  );
}

export default Carrinho;