import UseProducts from "../../../Hook/UseProducts/UseProducts";
import SwiperCard from "../../../component/SwiperCard/SwiperCard";

const BestSeller = () => {
    const [AllProducts,isLoading] = UseProducts()
    const BestSeller = AllProducts.filter(item => item.seller === 'best-seller')
  
    return (
        <div>
            <p className="mt-10 mb-5 m-2 text-2xl font-bold">Best Seller</p>
            <SwiperCard details={BestSeller} isLoading={isLoading}></SwiperCard>
        </div>
    );
};

export default BestSeller;