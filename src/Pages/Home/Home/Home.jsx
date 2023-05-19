import UseTitle from "../../../Hooks/UseTitle";
import Banner from "../Banner/Banner";
import ShopCategory from "../ShopCategory/ShopCategory";
import ToyGallery from "../ToyGallery/ToyGallery";


const Home = () => {
    UseTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <ToyGallery></ToyGallery>
            <ShopCategory></ShopCategory>
        </div>
    );
};

export default Home;