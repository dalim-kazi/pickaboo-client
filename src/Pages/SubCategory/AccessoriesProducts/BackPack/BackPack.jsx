import { Spinner } from "@material-tailwind/react";
import UseProducts from "../../../../Hook/UseProducts/UseProducts";
import ProductsCard from "../../../../component/ProductsCard/ProductsCard";

 
const BackPack = () => {
    const [AllProducts, isLoading] = UseProducts()
    const AccessoriesProduct = AllProducts.filter(item => item.category === "Accessories")
    const backPack =AccessoriesProduct?.filter(item=>item.subCategory ==="Backpack")
     
    if (isLoading) {
        return <Spinner className="h-16 w-16 text-blue-600 mx-auto mt-80" />
    }
     
    return (
        <>
        <p className="text-2xl mt-20 mx-10 text-orange-600 border-b-2 text-center">BackPack Collection</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 m-5">
            {
               backPack?.map(item=><ProductsCard key={item._id} productsDetails={item}></ProductsCard>)
            }
        </div>
        </>
    )
};

export default BackPack;