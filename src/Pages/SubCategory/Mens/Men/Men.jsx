 
import UseProducts from "../../../../Hook/UseProducts/UseProducts";

const Men = () => {
    const [AllProducts, isLoading] = UseProducts()
    const mensProduct = AllProducts.filter(item => item.gender === "men")
     
    return [mensProduct,isLoading]    
};

export default Men;