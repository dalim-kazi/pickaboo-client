import { Outlet, useLocation } from "react-router-dom";
import Header from "../../Sherad/Navber/Header";
import Footer from "../../Sherad/Footer/Footer";

const Main = () => {
    const location  =useLocation()
    const singUpAndSingIn = location.pathname.includes('login') || location.pathname.includes("register")||location.pathname.includes('payment/success') || location.pathname.includes('payment/fail')
    const isPathName =location.pathname.includes('bookingInformation')||location.pathname.includes('favoriteProducts')||location.pathname.includes('addToCartView')
    return (
        <>
           {singUpAndSingIn || <Header></Header>}
            <Outlet></Outlet>
            {singUpAndSingIn || isPathName || <Footer></Footer>}
        </>
    );
};

export default Main;