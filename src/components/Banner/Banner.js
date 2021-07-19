import "./Banner.scss";
import banner_img from "../../assets/Banner.png";


const Banner = () => {

    return(
        <>
            <div className="banner">
                <img
                    alt="imagem de promo��o"
                    className="search-icon"
                    src={banner_img}
                />
            </div>
        </>
    );
};

export default Banner;