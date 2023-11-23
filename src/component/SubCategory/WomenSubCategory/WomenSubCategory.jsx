import { Link } from "react-router-dom";
import OfferProducts from "../../../Pages/Homes/OfferProducts/OfferProducts";
import Women from "../../../Pages/SubCategory/Womens/Women/Women";

 
const WomenSubCategory = () => {
    const [womenProduct] = Women()
    const ladiesClosedShoes = womenProduct?.filter(item => item.subCategory === 'ladies-closed-shoes')
    const ladiesHeel = womenProduct?.filter(item => item.subCategory === 'Heel')
    const ladiesSportShoes = womenProduct?.filter(item => item.subCategory === 'casual')
    const womenSandal =womenProduct?.filter(item=>item.subCategory === 'sandals')
    return (
        <>
        <p className="text-2xl mt-20 mx-10">WOMEN</p>
        <div className="mx-10"><OfferProducts></OfferProducts></div>
        <p className="text-xl  mt-10 mx-10">SUB CATEGORIES</p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-5 mx-5 md:mx-10 mt-5 mb-10">
            <Link to={"/sidePages/womenSandal"}>
            <div className="flex items-center gap-3">
            <img className="w-14 md:w-20  h-14 md:h-20  rounded-full" src="https://www.batabd.com/cdn/shop/collections/713416e138aa494033f4d48874fd9e3a_300x.jpg?v=1655526883" alt="" />
            <div>
                <p className="font-bold">Womens Sandal</p>
                <p>{womenSandal.length}  items</p>
            </div>
        </div>
            </Link>
            <Link to={"/sidePages/ladies-closed-shoes"}>
            <div className="flex items-center gap-3">
            <img className="w-14 md:w-20 h-14 md:h-20 rounded-full" src="https://www.batabd.com/cdn/shop/collections/Ladies-closed-shoe_300x.jpg?v=1684039056" alt="" />
            <div>
                <p className="font-bold">Ladies Closed Shoes</p>
                <p>{ladiesClosedShoes.length}  items</p>
            </div>
        </div>
            </Link>
            <Link to={"/sidePages/ladies-heel"}>
            <div className="flex items-center gap-3">
            <img className="w-14 md:w-20 h-14 md:h-20 rounded-full" src="https://www.batabd.com/cdn/shop/collections/fe2cfeef5964ff80c0f9ef30c1ab96bd_300x.jpg?v=1655526916" alt="" />
            <div>
                <p className="font-bold">Ladies Heel</p>
                <p>{ladiesHeel.length}  items</p>
            </div>
        </div>
            </Link>
            <Link to={"/sidePages/ladies-sport"}>
            <div className="flex items-center gap-3">
            <img className="w-14 md:w-20 h-14 md:h-20 rounded-full" src="https://www.batabd.com/cdn/shop/collections/bff9651c593a59f96c1654bc2d4804c8_300x.jpg?v=1655526917" alt="" />
            <div>
                <p className="font-bold">Ladies Sport</p>
                <p>{ladiesSportShoes.length}  items</p>
            </div>
        </div>
            </Link>
    </div>
    </>
    );
};

export default WomenSubCategory;