import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Homes/Home/Home";
import SidePages from "../Layout/SidePages/SidePages";
import Voucher from "../Pages/ProductSidePages/Voucher/Voucher";
import Mans from "../Pages/ProductSidePages/Gender/Mans/Mans";
import Women from "../Pages/ProductSidePages/Gender/Women/Women";
import Power from "../Pages/ProductSidePages/Brands/Power/Power";
import Bata from "../Pages/ProductSidePages/Brands/Bata/Bata";
import BateRedLabel from "../Pages/ProductSidePages/Brands/BateRedLabel/BateRedLabel";
import Adidas from "../Pages/ProductSidePages/Brands/Adidas/Adidas";
import Bate3D from "../Pages/ProductSidePages/Brands/Bate3D/Bate3D";
import Nike from "../Pages/ProductSidePages/Brands/Nike/Nike";
import Black from "../Pages/ProductSidePages/Color/Black/Black";
import White from "../Pages/ProductSidePages/Color/White/White";
import Red from "../Pages/ProductSidePages/Color/Red/Red";
import Blue from "../Pages/ProductSidePages/Color/Blue/Blue";
import Gray from "../Pages/ProductSidePages/Color/Gray/Gray";
import Brown from "../Pages/ProductSidePages/Color/Brown/Brown";
import Green from "../Pages/ProductSidePages/Color/Green/Green";
import Pink from "../Pages/ProductSidePages/Color/Pink/Pink";
import NorthStar from "../Pages/ProductSidePages/Brands/NorthStar/NorthStar";
import UnderTo1000 from "../Pages/ProductSidePages/Price/UnderTo1000/UnderTo1000";
import UnderTo2000 from "../Pages/ProductSidePages/Price/UnderTo1000/UnderTo2000";
import Under3000 from "../Pages/ProductSidePages/Price/Under3000/Under3000";
import Under4000 from "../Pages/ProductSidePages/Price/Under4000/Under4000";
import Under5000 from "../Pages/ProductSidePages/Price/Under5000/Under5000";
import Above5000 from "../Pages/ProductSidePages/Price/Above5000/Above5000";
import Children from "../Pages/ProductSidePages/Gender/Children/Children";
import Accessories from "../Pages/ProductSidePages/Gender/Accessories/Accessories";
import CasualShoes from "../Pages/SubCategory/Mens/CasualShoes/CasualShoes";
import FormalShoes from "../Pages/SubCategory/Mens/FormalShoes/FormalShoes";
import MensSandal from "../Pages/SubCategory/Mens/MensSandal/MensSandal";
import Mocassino from "../Pages/SubCategory/Mens/Mocassino/Mocassino";
import Sport from "../Pages/SubCategory/Mens/Sport/Sport";
import WomenSandal from "../Pages/SubCategory/Womens/WomenSandal/WomenSandal";
import LadiesClosedShoes from "../Pages/SubCategory/Womens/LadiesClosedShoes/LadiesClosedShoes";
import LadiesHeel from "../Pages/SubCategory/Womens/LadiesHeel/LadiesHeel";
import LadiesSport from "../Pages/SubCategory/Womens/LadiesSport/LadiesSport";
import Boys from "../Pages/SubCategory/Children/Boys/Boys";
import Girls from "../Pages/SubCategory/Children/Girls/Girls";
import BackPack from "../Pages/SubCategory/AccessoriesProducts/BackPack/BackPack";
import Bags from "../Pages/SubCategory/AccessoriesProducts/Bags/Bags";
import TermsAndCondition from "../component/ProductsOverView/DetailsTab/TERMSANDCONDITION";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import FavoriteProducts from "../Pages/FavoriteProducts/FavoriteProducts";

import FavoriteProductsView from "../Pages/FavoriteProducts/FavoriteProductsView/FavoriteProductsView";
import AddToCartView from "../Pages/AddToCartView/AddToCartView";
import PrivateRouter from "./PrivateRouter";
import AddToCartDetail from "../Pages/AddToCartView/AddToCartDetail";
import ProductsOverViewDetails from "../component/ProductsOverView/ProductsOverViewDetails/ProductsOverViewDetails";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";
import DashboardPages from "../Layout/Dashboard/DashboardPages";
import ProductsCardPages from "../Pages/productsCardPages/ProductsCardPages";
import ProductsViewBookingDetails from "../Pages/BookingDetails/ProductsViewBookingDetails";
import CardBookingDetails from "../Pages/BookingDetails/CardBookingDetails";
import PaymentSuccess from "../Pages/PaymentMethod/PaymentSuccess";
import AdminRouter from "./AdminRouter";
import OrderPage from "../Pages/OrderPage/OrderPage";
import PaymentFail from "../Pages/PaymentMethod/PaymentFail";
import ManageBookings from "../Pages/Dashboard/ManageBookings/ManageBookings";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import SearchProducts from "../component/SearchProducts/SearchProducts";
 

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/productsOverView/:id",
                element: <ProductsCardPages></ProductsCardPages>,
                loader:async({params})=>await fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: "/productsOverViewDetails",
                element:<ProductsOverViewDetails></ProductsOverViewDetails>
            },
             
            {
                path: "/terms-and-condition",
                element:<TermsAndCondition></TermsAndCondition>
            },
            {
                path: "/login",
                element:<Login></Login>
            },
            {
                path: "/register",
                element:<Register></Register>
            },
            {
                path: "/favoriteProducts",
                element:<PrivateRouter><FavoriteProducts></FavoriteProducts></PrivateRouter>
            },
            {
                path: "/favoriteProductsView/:id",
                element: <PrivateRouter><FavoriteProductsView></FavoriteProductsView></PrivateRouter>,
                loader:async({params})=>await fetch(`http://localhost:5000/favoriteProducts/${params.id}`)
            },
            {
                path: "/addToCartView",
                element:<PrivateRouter><AddToCartView></AddToCartView></PrivateRouter>
            },
            {
                path: "/addToCartDetail",
                element:<PrivateRouter><AddToCartDetail></AddToCartDetail></PrivateRouter>
            },
            {
                path: "/CartBookingDetails",
                element: <CardBookingDetails></CardBookingDetails>
            },
            {
                path: "/productsViewBookingDetails",
                element:<ProductsViewBookingDetails></ProductsViewBookingDetails>
            },
            {
                path: "/payment/success",
                element:<PaymentSuccess></PaymentSuccess>
            },
            {
                path: "/payment/fail",
                element:<PaymentFail></PaymentFail>
            },
            {
                path: "/myOrder",
                element:<OrderPage></OrderPage>
            },
            {
                path: '/searchProducts',
                element:<SearchProducts></SearchProducts>
            }
        ]
    },
    {
        path: "sidePages",
        element: <SidePages></SidePages>,
        children: [
            {
                path: 'voucher',
                key: "voucher",
                element:<Voucher></Voucher>
            },
            // gender
            {
                path: 'men',
                key:'men',
                element:<Mans></Mans>
            },
            {
                path: "women",
                key:'women',
                element:<Women></Women>
            },
            // brand
            {
                path: "power",
                key:'power',
                element:<Power></Power>
            },
            {
                path: "bata",
                key:'bata',
                element:<Bata></Bata>
            },
            {
                path: "northStar",
                key:'northStar',
                element:<NorthStar></NorthStar>
            },
            {
                path: "BateRedLabel",
                key:'BateRedLabel',
                element:<BateRedLabel></BateRedLabel>
            },
            {
                path: "Adidas",
                key:"Adidas",
                element:<Adidas></Adidas>
            },
            {
                path: "Bate3D",
                key:"Bate3D",
                element:<Bate3D></Bate3D>
            },
            {
                path: "Nike",
                key:"Nike",
                element:<Nike></Nike>
            },
            // color
            {
                path: "Black",
                key:"Black",
                element:<Black></Black>
            },
            {
                path: "white",
                key:"white",
                element:<White></White>
            },
            {
                path: "red",
                key:"red",
                element:<Red></Red>
            },
            {
                path: "blue",
                key:"blue",
                element:<Blue></Blue>
            },
            {
                path: "gray",
                key:"gray",
                element:<Gray></Gray>
            },
            {
                path: "brown",
                key:"brown",
                element:<Brown></Brown>
            },
            {
                path: "green",
                key:"green",
                element:<Green></Green>
            },
            {
                path: "pink",
                key:"pink",
                element:<Pink></Pink>
            },
            //  price 
            {
                path: "under1000",
                key:"under1000",
                element:<UnderTo1000></UnderTo1000>
            },
            {
                path: "under2000",
                key:"under2000",
                element:<UnderTo2000></UnderTo2000>
            },
            {
                path: 'under3000',
                key:"under3000",
                element:<Under3000></Under3000>
            },
            {
                path: "under4000",
                key:"under4000",
                element:<Under4000></Under4000>
            },
            {
                path: "under5000",
                key:"under5000",
                element:<Under5000></Under5000>
            },
            {
                path: "above5000",
                key:"above5000",
                element:<Above5000></Above5000>
            },
            // children 
            {
                path: "children",
                key:"children",
                element:<Children></Children>
            },


            // Accessories
            {
                path: "Accessories",
                key:"Accessories",
                element:<Accessories></Accessories>
            },
            // men subCategory 
            {
                path: "casual",
                key:"casual",
                element:<CasualShoes></CasualShoes>
            },
            {
                path: 'formalShoe',
                key:"formalShoe",
                element:<FormalShoes></FormalShoes>
            },
            {
                path: "sandals",
                key:"sandals",
                element:<MensSandal></MensSandal>
            },
            {
                path: "mocassino",
                key:"mocassino",
                element:<Mocassino></Mocassino>
            },
            {
                path: "sport",
                key:"sport",
                element:<Sport></Sport>
            },
            // women
            {
                path: "womenSandal",
                key:"womenSandals",
                element:<WomenSandal></WomenSandal>
            },
            {
                path: "ladies-closed-shoes",
                key:"ladies-closed-shoes",
                element:<LadiesClosedShoes></LadiesClosedShoes>
            },
            {
                path: "ladies-heel",
                key:"ladies-heel",
                element:<LadiesHeel></LadiesHeel>
            },
            {
                path: "ladies-sport",
                key:"ladies-sport",
                element:<LadiesSport></LadiesSport>
            },
            // children 
            {
                path: "boys",
                key:"boys",
                element:<Boys></Boys>
            },
            {
                path: 'girls',
                key:"girls",
                element:<Girls></Girls>
            },
            // Accessories 
            {
                path: "back-pack",
                key:"back-pack",
                element:<BackPack></BackPack>
            },
            {
                path: "bags",
                key:"bags",
                element:<Bags></Bags>
            }
          
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRouter><AdminRouter><DashboardPages></DashboardPages></AdminRouter></PrivateRouter>,
        children: [
        // admin
            {
                path: "manageUser",
                key:"manageUser",
                element: <AdminRouter><ManageUser></ManageUser></AdminRouter>
            },
            {
                path: "manageBookings",
                key:"manageBookings",
                element:<AdminRouter><ManageBookings></ManageBookings></AdminRouter>
            },
            {
                path: "manageItems",
                key:"manaItems",
                element:<AdminRouter><ManageItems></ManageItems></AdminRouter>
            },
            {
                path: "addItem",
                key:"addItem",
                element:<AdminRouter><AddItem></AddItem></AdminRouter>
            },
            {
                path: "adminHome",
                key:"adminHome",
                element:<AdminRouter><AdminHome></AdminHome></AdminRouter>
            },
        ]
    },
])