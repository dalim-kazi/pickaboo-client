import Banner from "../Banner/Banner";
import BestSeller from "../BestSeller/BestSeller";
 
import Category from "../Category/Category";
import Collection from "../Collection/Collection";
import OfferProducts from "../OfferProducts/OfferProducts";
import PickFavoriteProducts from "../PickFavaoriteProducts/PickFavoriteProducts";
import PopularProducts from "../PopularProducts/PopularProducts";
import SpecialProductsBanner from "../SpecialProductsBanner/SpecialProductsBanner";
import ProductsSubCategory from "../ProductsSubCategory/ProductsSubCategory";
import ProvideCustomChat from "../../../component/ProvideCustomChat/ProvideCustomChat";
const Home = () => {
    return (
        <div>
           <div>
           <Banner></Banner>
            <div className="md:mx-20 mx-5">
                <Category></Category>
                <OfferProducts></OfferProducts>
                <ProductsSubCategory></ProductsSubCategory>
                <Collection></Collection>
                <PopularProducts></PopularProducts>
                <SpecialProductsBanner></SpecialProductsBanner>
                <BestSeller></BestSeller>
                <PickFavoriteProducts></PickFavoriteProducts>
            </div>
            </div>
            <ProvideCustomChat></ProvideCustomChat>
        </div>
    );
};

export default Home;