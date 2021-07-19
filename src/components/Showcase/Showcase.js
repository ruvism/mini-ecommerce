import "./Showcase.scss";
import ProductCard from "../ProductCard/ProductCard";

//to do: trazer o card

const Showcase = () => {

    return(
        <div className="showcase container">
            <h2>Promoções em destaque</h2>
            <div className="showcase__elements">
                {/* loop para pegar todos os itens */}
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default Showcase;
