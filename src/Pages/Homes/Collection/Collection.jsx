 
import { Link } from "react-router-dom";

const Collection = () => {
    return (
        <div className="mt-10">
            <p className="text-2xl font-bold mb-10">OUR HAND PICKED COLLECTION FOR YOU</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-5 mt-10 mb-5">
                <Link to={"/sidePages/casual"}>
                <div className="border-2">   
                <img src="https://www.batabd.com/cdn/shop/files/NS-banner-with-model-_-product_800x800_crop_center.jpg?v=1666761156" alt="" />
                    <p className="text-center -mt-4 "><span className="bg-white py-5 px-5 text-xl font-semibold">NORTH START CURATED</span></p>
                    <div className="text-center mb-5 mt-5">
                    <p className="px-8 py-5">
                      Shop the most stylish accessories! Find everything from belts, shoe care kits to classy bags from fabulously sought after brands!</p>
                     <Link to={"/sidePages/casual"} className="font-semibold hover:bg-black hover:p-3 hover:text-white">SHOP NOW</Link>
                       </div>
                </div>
                </Link>
                <Link to={"/sidePages/Accessories"}>
                <div className="border-2">
                    <img src="https://www.batabd.com/cdn/shop/files/Accessories-web-banner-square2_800x800_crop_center.jpg?v=1660816004" alt="" />
                    <p className=" text-center -mt-1"><span className="bg-white py-5 px-5 text-xl font-semibold">YOUR ACCESSORIES</span></p>
                    <div className="text-center mb-5">
                    <p className="px-8 py-5">
                        Here goes the trendiest lifestyle selection to redefine all your moves! Ensuring a look unlike any other, brimming with coolness.</p>
                     <Link to={"/sidePages/Accessories"} className="font-semibold hover:bg-black hover:p-3 hover:text-white">SHOP NOW</Link>
                       </div>
                </div>
                </Link>
                <Link to={"/sidePages/sport"}>
                <div className="border-2">
                    <img src="https://www.batabd.com/cdn/shop/files/adidas-web-banner-square1_800x800_crop_center.jpg?v=1660815837" alt="" />
                    <p className=" text-center -mt-1"><span className="bg-white py-5 px-5 text-xl font-semibold">RUNTASTIC SPIRIT</span></p>
                    <div className="text-center mb-5">
                    <p className="px-8 py-5"> 
                     Find the perfect athletic shoes with endless energy to fit your performances & show the world that Impossible is Nothing</p>
                     <Link to={"/sidePages/sport"} className="font-semibold hover:bg-black hover:p-3 hover:text-white">SHOP NOW</Link>
                       </div>
                </div>
                </Link>
            </div>
        </div>
    );
};

export default Collection;