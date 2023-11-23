 
import UseProducts from '../../../Hook/UseProducts/UseProducts';
import SwiperCard from '../../../component/SwiperCard/SwiperCard';

const PopularProducts = () => {
   const [AllProducts,isLoading]=UseProducts()
  
  const popular = AllProducts.filter(item => item.Featured === 'popular')
   
    return (
      <>
        <p className='mt-10 mb-5 text-3xl m-2 font-bold'>Featured Products</p>
        <SwiperCard details={popular} isLoading={isLoading}></SwiperCard>
    </>
    );
 };
 
 export default PopularProducts;

 