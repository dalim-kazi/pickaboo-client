import { Link } from "react-router-dom";
import OfferProducts from "../../../Pages/Homes/OfferProducts/OfferProducts";
import UseProducts from "../../../Hook/UseProducts/UseProducts";
const ChildrenSubCategory = () => {
    const [AllProducts]=UseProducts()
    const boysProducts = AllProducts?.filter(item => item.gender === 'boys')
    const girlsProducts = AllProducts?.filter(item => item.gender === 'girls')
    return (
        <>
        <p className="text-2xl mt-20 mx-10">Children</p>
        <div className="mx-10"><OfferProducts></OfferProducts></div>
        <p className="text-xl  mt-10 mx-10">SUB CATEGORIES</p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-5 mx-5 md:mx-10 mt-5 mb-10">
            <Link to={"/sidePages/boys"}>
            <div className="flex items-center gap-3">
            <img className="w-14 md:w-20  h-14 md:h-20  rounded-full" src="https://www.batabd.com/cdn/shop/collections/7e2b6a7e8521149dc79d431eba1a36c4_300x.jpg?v=1655526900" alt="" />
            <div>
                <p className="font-bold">Boys</p>
                <p>{boysProducts.length}  items</p>
            </div>
        </div>
            </Link>
            <Link to={"/sidePages/girls"}>
            <div className="flex items-center gap-3">
            <img className="w-14 md:w-20 h-14 md:h-20 rounded-full" src="https://www.batabd.com/cdn/shop/collections/8ed826048c21979c1c8f339db1ef6b02_300x.jpg?v=1655526901" alt="" />
            <div>
                <p className="font-bold">Girls</p>
                <p>{girlsProducts.length}  items</p>
            </div>
        </div>
            </Link>
    </div>
    </>
    );
};

export default ChildrenSubCategory;