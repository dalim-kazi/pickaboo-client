import { useLoaderData } from "react-router-dom";
import ProductsOverView from "../../component/ProductsOverView/ProductsOverView";

 

const ProductsCardPages = () => {
    const products = useLoaderData()
    return (
        <div>
            <ProductsOverView products={products}></ProductsOverView>
        </div>
    );
};

export default ProductsCardPages;