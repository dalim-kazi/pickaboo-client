import { Spinner } from "@material-tailwind/react";
import UseProducts from "../../../../Hook/UseProducts/UseProducts";
import ProductsCard from "../../../../component/ProductsCard/ProductsCard";

 

const Blue = () => {
    const [AllProducts, isLoading] = UseProducts()
    const blueProduct = AllProducts.filter(item => item.color === "blue")
    if (isLoading) {
        return <Spinner className="h-16 w-16 text-blue-600 mx-auto mt-80" />
    }
   
    return (
        <>
        <p className="text-2xl mt-20 mx-10 text-orange-600 border-b-2 text-center">Blue Collection</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 m-5">
            {
                blueProduct?.map(item=><ProductsCard key={item._id} productsDetails={item}></ProductsCard>)
            }
        </div>
        </>
    )
};

export default Blue;