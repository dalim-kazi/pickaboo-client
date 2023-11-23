import { Link } from "react-router-dom";

const PickFavoriteProducts = () => {
    return (
        <div>
            <div className="mt-10">
            <p className="text-2xl font-bold mb-5">Pick Your Favorite</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-5 mb-20">
                <div className="border-2">   
                <img src="https://www.batabd.com/cdn/shop/files/ladies-heel-new_800x800_crop_center.jpg?v=1665545217" alt="" />
                        <div className="-mt-4 text-center">
                            <span className="bg-white px-32 md:px-20 lg:px-32 py-5 text-xs">LADIES</span><br />
                            <span className="bg-white px-32 md:px-20 lg:px-28 font-semibold text-xl">HEELS</span>
                     </div>
                    <div className="text-center mb-5 mt-5">
                    <p className="px-8 py-5">
                      Shop the most stylish accessories! Find everything from belts, shoe care kits to classy bags from fabulously sought after brands!</p>
                     <Link to={"/sidePages/ladies-heel"} className="font-semibold hover:bg-black hover:p-3 hover:text-white">SHOP NOW</Link>
                       </div>
                </div>
                <div className="border-2">
                    <img src="https://www.batabd.com/cdn/shop/files/men_s-formal-new_800x800_crop_center.jpg?v=1665545247" alt="" />
                    <div className="-mt-4 text-center">
                            <span className="bg-white px-32 md:px-20 lg:px-32 py-5 text-xs">MENS</span><br />
                            <span className="bg-white px-32 md:px-20 lg:px-28 font-semibold text-xl">FORMALS</span>
                     </div>
                    <div className="text-center mb-5">
                    <p className="px-8 py-5">
                        Here goes the trendiest lifestyle selection to redefine all your moves! Ensuring a look unlike any other, brimming with coolness.</p>
                     <Link to={"/sidePages/formalShoe"} className="font-semibold hover:bg-black hover:p-3 hover:text-white">SHOP NOW</Link>
                       </div>
                </div>
                <div className="border-2">
                    <img src="https://www.batabd.com/cdn/shop/files/ladies-bag-new_800x800_crop_center.jpg?v=1665545273" alt="" />
                    <div className="-mt-4 text-center">
                            <span className="bg-white px-32 md:px-20 lg:px-32 py-5 text-xs">LADIES</span><br />
                            <span className="bg-white px-32 md:px-20 lg:px-28 font-semibold text-xl">BAGS</span>
                     </div>
                    <div className="text-center mb-5">
                    <p className="px-8 py-5"> 
                     Find the perfect athletic shoes with endless energy to fit your performances & show the world that Impossible is Nothing</p>
                     <Link to={"/sidePages/bags"} className="font-semibold hover:bg-black hover:p-3 hover:text-white">SHOP NOW</Link>
                       </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default PickFavoriteProducts;