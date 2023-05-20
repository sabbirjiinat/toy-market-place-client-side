import UseTitle from "../../../Hooks/UseTitle";
import Banner from "../Banner/Banner";
import ShopCategory from "../ShopCategory/ShopCategory";
import ToyGallery from "../ToyGallery/ToyGallery";
import TrendingToys from "./TrendingToys/TrendingToys";


const Home = () => {
    UseTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <ToyGallery></ToyGallery>
            <ShopCategory></ShopCategory>
            <TrendingToys></TrendingToys>
        </div>
    );
};

export default Home;