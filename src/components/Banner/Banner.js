import "./Banner.scss";
import banner_img from "../../assets/Banner.png";


const Banner = () => {

    return(
        <>
            <div className="banner">
                <img
                    alt="imagem de promoção"
                    className="search-icon"
                    src={banner_img}
                />
            </div>
        </>
    );
};

export default Banner;