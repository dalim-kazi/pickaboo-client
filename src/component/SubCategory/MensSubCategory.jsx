import { Link } from "react-router-dom";
import OfferProducts from "../../Pages/Homes/OfferProducts/OfferProducts";
import Men from "../../Pages/SubCategory/Mens/Men/Men";

 

 
const MensSubCategory = () => {
    const [mensProduct] = Men()
    const CasualProducts = mensProduct.filter(item => item.subCategory === "casual")
    const sandalProducts = mensProduct.filter(item => item.subCategory === "sandals")
    const FormalShoeProducts = mensProduct.filter(item => item.subCategory === "Formal Shoe")
    const loaferProducts = mensProduct.filter(item => item.subCategory === "loafer")
    const SportProducts = mensProduct.filter(item => item.subCategory === "Sport")
    return (
        <>
            <p className="text-2xl mt-20 mx-10">MEN</p>
            <div className="mx-10"><OfferProducts></OfferProducts></div>
            <p className="text-xl  mt-10 mx-10">SUB CATEGORIES</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mx-5 md:mx-10 mt-5">
                <Link to={"/sidePages/casual"}>
                <div className="flex items-center gap-3">
                <img className="w-14 md:w-20  h-14 md:h-20  rounded-full" src="https://www.batabd.com/cdn/shop/collections/f33a83d1c22370103cd810173e19cbef_300x.jpg?v=1655526880" alt="" />
                <div>
                    <p className="font-bold">Casual Shoes</p>
                    <p>{CasualProducts.length} items</p>
                </div>
            </div>
                </Link>
                <Link to={"/sidePages/formalShoe"}>
                <div className="flex items-center gap-3">
                <img className="w-14 md:w-20 h-14 md:h-20 rounded-full" src="https://www.batabd.com/cdn/shop/collections/men-formal_300x.jpg?v=1610355900" alt="" />
                <div>
                    <p className="font-bold">Formal Shoes</p>
                    <p>{FormalShoeProducts.length} items</p>
                </div>
            </div>
                </Link>
                <Link to={"/sidePages/sandals"}>
                <div className="flex items-center gap-3">
                <img className="w-14 md:w-20 h-14 md:h-20 rounded-full" src="https://www.batabd.com/cdn/shop/collections/e1240c2005399ae73004efab50e96d78_300x.jpg?v=1655526904" alt="" />
                <div>
                    <p className="font-bold">Mens Sandal</p>
                    <p>{sandalProducts.length} items</p>
                </div>
            </div>
                </Link>
                <Link to={"/sidePages/mocassino"}>
                <div className="flex items-center gap-3">
                <img className="w-14 md:w-20 h-14 md:h-20 rounded-full" src="https://www.batabd.com/cdn/shop/collections/c07825d288e979a5d213e6a7daf13807_300x.jpg?v=1655526915" alt="" />
                <div>
                    <p className="font-bold">Mocassino</p>
                    <p>{loaferProducts.length} items</p>
                </div>
            </div>
                </Link>
                <Link to={"/sidePages/sport"}>
                <div className="flex items-center gap-3">
                <img className="w-14 md:w-20 h-14 md:h-20 rounded-full" src="https://www.batabd.com/cdn/shop/collections/37dd990961f795657479c0b449dc495d_300x.jpg?v=1655526881" alt="" />
                <div>
                    <p className="font-bold">Sports</p>
                    <p>{SportProducts.length} items</p>
                </div>
            </div>
                </Link>
        </div>
        </>
    );
 };
 
 export default MensSubCategory;