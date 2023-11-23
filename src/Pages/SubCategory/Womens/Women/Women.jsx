import UseProducts from "../../../../Hook/UseProducts/UseProducts";

 
const Women = () => {
    const [AllProducts, isLoading] = UseProducts()
    const womenProduct = AllProducts.filter(item => item.gender === "women")
    return [womenProduct,isLoading]  
};

export default Women;