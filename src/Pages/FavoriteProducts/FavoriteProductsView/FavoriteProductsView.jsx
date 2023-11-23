import { useLoaderData } from "react-router-dom";
import ProductsOverView from "../../../component/ProductsOverView/ProductsOverView";

 

const FavoriteProductsView = () => {
    const products = useLoaderData()
    console.log(products)
    return (
        <div >
            <ProductsOverView products={products}></ProductsOverView>
        </div>
    );
};

export default FavoriteProductsView;