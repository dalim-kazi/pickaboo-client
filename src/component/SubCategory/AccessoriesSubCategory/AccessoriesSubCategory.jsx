import { Link } from "react-router-dom";
import OfferProducts from "../../../Pages/Homes/OfferProducts/OfferProducts";
import UseProducts from "../../../Hook/UseProducts/UseProducts";
const AccessoriesSubCategory = () => {
    const [AllProducts] = UseProducts()
    const AccessoriesProduct = AllProducts.filter(item => item.category === "Accessories")
    const backPack = AccessoriesProduct?.filter(item => item.subCategory === "Backpack")
    const bags =AccessoriesProduct?.filter(item=>item.subCategory ==="Bags")
    return (
        <>
        <p className="text-2xl mt-20 mx-10">Accessories</p>
        <div className="mx-10"><OfferProducts></OfferProducts></div>
        <p className="text-xl  mt-10 mx-10">SUB CATEGORIES</p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-5 mx-5 md:mx-10 mt-5 mb-10">
            <Link to={"/sidePages/back-pack"}>
            <div className="flex items-center gap-3">
            <img className="w-14 md:w-20  h-14 md:h-20  rounded-full" src="https://www.batabd.com/cdn/shop/collections/5f5572de5d5ad7bdaa6abaab156da976_300x.jpg?v=1655526918" alt="" />
            <div>
                <p className="font-bold">BackPack</p>
                <p>{backPack.length}  items</p>
            </div>
        </div>
            </Link>
            <Link to={"/sidePages/bags"}>
            <div className="flex items-center gap-3">
            <img className="w-14 md:w-20 h-14 md:h-20 rounded-full" src="https://www.batabd.com/cdn/shop/collections/6a596b1ac28ade03e8f93116b020b918_300x.jpg?v=1655526902" alt="" />
            <div>
                <p className="font-bold">Bags</p>
                <p>{bags.length}  items</p>
            </div>
        </div>
            </Link>
    </div>
    </>
    );
};

export default AccessoriesSubCategory;